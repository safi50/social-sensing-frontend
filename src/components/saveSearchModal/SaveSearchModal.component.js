import React, {useState, useContext} from "react";
import { ModalTitle, ModalHeader, ModalBody, SaveSearchBarContainer, SaveSearchInput, CompareQuery, ComparedQueriesContainer, CircleContainer, ModalFooter, SaveBtn } from "./SaveSearchModal.styles";
import Modal from 'react-bootstrap/Modal';
import { DownloadButton } from "../dashboard/Dashboard.styles";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";


const SaveSearchModal = ({show, handleClose, addToDataset})=>{
    const [name, setName] = useState("")
    const {
        data,
        deleteDataByName,
        filters: contextFilters,
        setFilters: setContextFilters,
      } = useContext(CompareKeywordContext);

    const handleSaveSearch = (name)=>{
        addToDataset(name, contextFilters.eventNames, contextFilters.eventQueries)
    }

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
            
            {contextFilters.eventQueries.map((element, index) => (
                <CompareQuery key={index}>
                <CircleContainer>
                    <circle cx="50" cy="50" r="50" fill="#6937f2" />
                </CircleContainer>
                {element}
                </CompareQuery>
            ))}
            
            </ComparedQueriesContainer>
        </ModalBody>
        <ModalFooter>
            <SaveBtn style={{marginBottom: '10px', marginRight: '5px'}} onClick={() => handleSaveSearch(name)}>Save</SaveBtn>
        </ModalFooter>
      </Modal>
        </>
    )
}

export default SaveSearchModal