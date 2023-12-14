import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import { SearchBarContainer, SearchInput, } from "../worldwideDropdown/worldwideDropdown.styles";
import { DownloadButton } from "../dashboard/Dashboard.styles";


export const ModalTitle = styled(Modal.Title)`
    font-weight: bold;
`

export const ModalHeader = styled(Modal.Header)`
    border-bottom: none;
    // padding: 20px
`

export const ModalBody = styled(Modal.Body)`
    font-size: 13px;
    border-bottom: none
`

export const ModalFooter = styled(Modal.Footer)`
    border-top: none;
    font-size: 14px
`

export const SaveBtn = styled(DownloadButton)`
    margin-bottom: 10px;
    margin-right: 5px
`

export const SaveSearchBarContainer = styled(SearchBarContainer)`
border: 2px solid rgba(105, 55, 242, 0.5);
height: 35px;
padding: 0px;
margin-bottom: 15px
`

export const SaveSearchInput = styled(SearchInput)`
padding: 5px;
color: black;
opacity: 1;
`