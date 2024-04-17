import React, { useEffect, useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-multilevel-dropdown";
import {
  ModalDialog,
  ModalHeader,
  ModalFooter,
  ModalBody,
  DropdownTitle,
  FooterContainer,
  StyledDropdown,
} from "./MySearchesModal.styles";
import { Pagination } from "@mui/material";
import MySearchesItem from "../MySearchesItem/MySearchesItem.component";
import { DropdownIcon } from "../worldwideDropdown/worldwideDropdown.styles";
import { SavedSearchesContext } from "../../contexts/SavedSearches.context";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../../utils/api";


// sidebar modal to show the list of user's saved searches
const MySearchModal = ({
  show,
  handleClose,
  handleEditSearch,
  handleDeleteSearch,
}) => {
  const { mySavedSearches, setMySavedSearches } = useContext(SavedSearchesContext)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cookies] = useCookies(["token"]);
  const [searchView, setSearchView] = useState([]);
  

  useEffect(() => {
    // get all the saved searches of the user
    const fetchSavedSearches = async () => {
      try {
        const token = cookies.token;
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        const response = await axios.get(`${API_URL}/search/getSearches?userId=${userId}`, {
          withCredentials: true,
        });
      
        setMySavedSearches(response.data.searches);
        setTotalPages(Math.ceil(response.data.searches.length / rowsPerPage));
      } catch (error) {
        console.error("Error fetching saved searches:", error);
      }
    };
    fetchSavedSearches();
  }, [cookies.token, rowsPerPage, mySavedSearches, setMySavedSearches]);

  useEffect(() => {
  }, [currentPage, mySavedSearches, rowsPerPage]);

  // handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleRowsPerPageChange = (number) => {
    setRowsPerPage(number);
    setCurrentPage(1);
  };

  // dropdown componenet for selecting the number of items to be displaced in one page
  const RowsPerPageDropdown = () => (
    <StyledDropdown
      title={
        <DropdownTitle>
          Rows per page {rowsPerPage}
          <DropdownIcon src="/dropdown-arrow-svgrepo-com.svg" />
        </DropdownTitle>
      }
      position="right"
    >
      {[2, 5, 10, 15].map((number) => (
        <Dropdown.Item
          key={number}
          onClick={() => handleRowsPerPageChange(number)}
        >
          {number}
        </Dropdown.Item>
      ))}
    </StyledDropdown>
  );

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <ModalDialog>
          <ModalHeader closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              My Searches
            </Modal.Title>
          </ModalHeader>
          <ModalBody>
            {mySavedSearches.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((item) => (
              <MySearchesItem
                key={item._id}
                item={item}
                handleEditSearch={handleEditSearch}
                handleDeleteSearch={() => handleDeleteSearch(item._id)} 
              />
            ))}
            <FooterContainer>
              <RowsPerPageDropdown />
              <Pagination
                count={totalPages}
                color="primary"
                onChange={(event, value) => {
                  handlePageChange(value);
                }}
              />
            </FooterContainer>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default MySearchModal;
