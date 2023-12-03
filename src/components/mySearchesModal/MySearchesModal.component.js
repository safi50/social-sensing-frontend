import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { ModalDialog, ModalHeader, ModalFooter, ModalBody } from "./MySearchesModal.styles";
import { Pagination } from "@mui/material";
import MySearchesItem from "../MySearchesItem/MySearchesItem.component";

const MySearchModal = ({show, handleClose, saveSearches}) =>{
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [totalPages, setTotalPages] = useState(parseInt((saveSearches.length-1) / rowsPerPage)+1)
    const [searchView, setSearchView] = useState(saveSearches.slice(0,rowsPerPage))
    console.log("length:", saveSearches)
    const handlePageChange = (newPage)=>{
        setSearchView(saveSearches.slice((newPage-1)*rowsPerPage, (newPage*rowsPerPage)))
    }

    return(
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
                        <MySearchesItem item={item}/>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Pagination count={totalPages} color="primary" onChange={(event, value)=> {handlePageChange(value)}}/>
                </ModalFooter>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default MySearchModal