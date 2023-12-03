import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-multilevel-dropdown';


export const ModalDialog = styled(Modal.Dialog)`
    position: fixed; 
    top: 0;        
    right: 0;       
    bottom: 0;
    width: 100%;
    maxWidth: 100%;
    height: 100%;
    transform: none;
    marginRight: 0;
`

export const ModalHeader = styled(Modal.Header)`
    border-bottom: none
`

export const ModalFooter = styled(Modal.Footer)`
    border-top: none;
    display: flex;
  justify-content: space-between;
`

export const ModalBody = styled(Modal.Body)`
    max-height: calc(100vh - 90px);
    overflow-y: auto;
    font-size: 15px;
    padding: 10px 20px
`

export const DropdownTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  opacity: 0.5
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px
`;

export const StyledDropdown = styled(Dropdown)`
background-color: transparent;
border: none
`