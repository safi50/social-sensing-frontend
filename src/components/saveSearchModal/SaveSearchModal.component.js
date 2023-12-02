import styled from "styled-components";

import React, {useState} from "react";
import { ModalTitle, ModalHeader, ModalBody, SaveSearchBarContainer, SaveSearchInput, CompareQuery, ComparedQueriesContainer, CircleContainer, ModalFooter, SaveBtn } from "./SaveSearchModal.styles";
import Modal from 'react-bootstrap/Modal';
import { DownloadButton } from "../dashboard/Dashboard.styles";


const SaveSearchModal = ({show, handleClose, addToDataset})=>{
    const [name, setName] = useState("")
    return (
        <>
            <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Save Search</ModalTitle>
        </ModalHeader>
        <ModalBody>
            Name
            <SaveSearchBarContainer>
                <SaveSearchInput onChange={(e) => setName(e.target.value)}></SaveSearchInput>
            </SaveSearchBarContainer>
            <ComparedQueriesContainer>
            Compared Queries
            <CompareQuery>
                <CircleContainer>
                <circle cx="50" cy="50" r="50" fill="#6937f2" />
                </CircleContainer>#Islamabad
            </CompareQuery>
            <CompareQuery>
                <CircleContainer>
                <circle cx="50" cy="50" r="50" fill="red" />
                </CircleContainer>Quetta
            </CompareQuery>
            <CompareQuery>
                <CircleContainer>
                <circle cx="50" cy="50" r="50" fill="lightgreen" />
                </CircleContainer>#Car Show 2022
            </CompareQuery>
            </ComparedQueriesContainer>
        </ModalBody>
        <ModalFooter>
            <SaveBtn style={{marginBottom: '10px', marginRight: '5px'}} onClick={() => addToDataset(name, "Islamabad")}>Save</SaveBtn>
        </ModalFooter>
      </Modal>
        </>
    )
}

export default SaveSearchModal