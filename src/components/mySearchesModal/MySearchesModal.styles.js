import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';

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

`

export const ModalBody = styled(Modal.Body)`
    max-height: calc(100vh - 110px);
    overflow-y: auto;
    font-size: 15px
`