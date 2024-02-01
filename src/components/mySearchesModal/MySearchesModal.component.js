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

const MySearchModal = ({
  show,
  handleClose,
  saveSearches,
  handleEditSearch,
  handleDeleteSearch,
}) => {
  const { mySavedSearches, setMySavedSearches } = useContext(SavedSearchesContext)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    parseInt((saveSearches.length - 1) / rowsPerPage) + 1
  );

  const [searchView, setSearchView] = useState(
    saveSearches.slice(0, rowsPerPage)
  );

  const updateSearchView = () => {
    setSearchView(
      saveSearches.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchView(
      saveSearches.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage)
    );
  };

  const handleRowsPerPageChange = (number) => {
    setRowsPerPage(number);
    setTotalPages(parseInt((saveSearches.length - 1) / number) + 1);
    setSearchView(saveSearches.slice(0, number));
  };

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
  useEffect(() => {
    console.log("================saveSearches==================");
    console.log(saveSearches);
    setTotalPages(parseInt((saveSearches.length - 1) / rowsPerPage) + 1)
    
    console.log("===========================================");
  }, [saveSearches]);

  useEffect(() => {
    updateSearchView();
  }, [saveSearches, rowsPerPage]);
  
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
            {searchView.map((item) => (
              <MySearchesItem
                key={item.id}
                item={item}
                handleEditSearch={handleEditSearch}
                handleDeleteSearch={handleDeleteSearch}
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
