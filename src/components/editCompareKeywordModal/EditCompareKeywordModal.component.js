import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import { ModalHeader, ModalTitle, ModalBody, SaveSearchBarContainer, SaveSearchInput, SaveBtn, ModalFooter } from './EditCompareKeywordModal.styles';

export default function EditCompareKeywordModal({show, handleClose, currentHashtag}) {
    const [hashtag, setHashtag] = useState(currentHashtag)
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Edit Search</ModalTitle>
        </ModalHeader>
        <ModalBody>
            label
            <SaveSearchBarContainer>
                <SaveSearchInput onChange={(e) => setHashtag(e.target.value)} value={hashtag}></SaveSearchInput>
            </SaveSearchBarContainer>
        </ModalBody>
        <ModalFooter>
            <SaveBtn style={{marginBottom: '10px', marginRight: '5px'}}>Save</SaveBtn>
        </ModalFooter>
      </Modal>
    </div>
  )
}
