import React, {useState, useContext} from "react";
import { ModalTitle, ModalHeader, ModalBody, SaveSearchBarContainer, SaveSearchInput, CompareQuery, ComparedQueriesContainer, CircleContainer, ModalFooter, SaveBtn } from "./SaveSearchModal.styles";
import Modal from 'react-bootstrap/Modal';
import { DownloadButton } from "../dashboard/Dashboard.styles";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { API_URL } from "../../utils/api";
import axios from 'axios';
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import {jwtDecode} from "jwt-decode";


const SaveSearchModal = ({show, handleClose, addToDataset})=>{
    const [name, setName] = useState("")
    const {
        data,
        deleteDataByName,
        filters: contextFilters,
        setFilters: setContextFilters,
      } = useContext(CompareKeywordContext);
      const [cookies] = useCookies(["token"]);


    const handleSaveSearch = async (name)=>{ 
        try {
        // addToDataset(name, contextFilters.eventNames, contextFilters.eventQueries)
        const token = cookies.token;
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        const data = {
            userId: userId,
            name: name,
            labels: contextFilters.eventNames,
            hashtags: contextFilters.eventQueries,
            region: "None",
        }
        const response = await axios.post(`${API_URL}/search/saveSearch`, data, {
            withCredentials: true,
        });

        if(response.status === 200){
            toast.success("Search Saved Successfully",
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {fontSize: '1.3rem'}
            })
        }
        handleClose();
    }
    catch (error){
        toast.error("Search could not be saved",
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            style: {fontSize: '1.3rem'}

        })
    }


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