import React, {useState, useContext, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import { ModalHeader, ModalTitle, ModalBody, SaveSearchBarContainer, SaveSearchInput, SaveBtn, ModalFooter } from './EditCompareKeywordModal.styles';
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";

// edit the label and query of a keyword
export default function EditCompareKeywordModal({show, handleClose, currentHashtag}) {
    const [label, setLabel] = useState(currentHashtag)
    const [query, setQuery] = useState(currentHashtag)
    const [updatedQuery, setUpdatedQuery] = useState(currentHashtag)
    const {
      filters: contextFilters,
      setFilters: setContextFilters,
    } = useContext(CompareKeywordContext);

    const handleSaveEdit = ()=>{
      console.log("edit", query, updatedQuery)
      if (query === updatedQuery){
        console.log("only change label")

        let updatedSearches = contextFilters.eventNames.map(item => {
          return item === currentHashtag ? label : item
        })
        setContextFilters({...contextFilters, eventNames: updatedSearches})
        return
      }

      let updatedSearches = contextFilters.eventNames.map(item => {
        return item === currentHashtag ? label : item
      })
      let updatedQueriesList = contextFilters.eventQueries.map(item => {
          return item === query ? updatedQuery : item
        })
      setContextFilters({...contextFilters, eventNames: updatedSearches, eventQueries: updatedQueriesList})
    }


    useEffect(() => {
      // Find the index of the label in the eventNames array
      const index = contextFilters.eventNames.findIndex(name => name === label);
  
      // If the label exists and the corresponding event query exists, update the eventQueryState
      if (index !== -1 && contextFilters.eventQueries[index]) {
        setQuery(contextFilters.eventQueries[index]);
        setUpdatedQuery(contextFilters.eventQueries[index])
      }
    }, [label, contextFilters.eventNames, contextFilters.eventQueries]); // Depend on label and contextFilters to update the state when they change
  
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Edit Search</ModalTitle>
        </ModalHeader>
        <ModalBody>
            Label
            <SaveSearchBarContainer>
                <SaveSearchInput onChange={(e) => setLabel(e.target.value)} value={label}></SaveSearchInput>
            </SaveSearchBarContainer>
            Query
            <SaveSearchBarContainer>
              <SaveSearchInput value={updatedQuery} onChange={(e) => setUpdatedQuery(e.target.value)}></SaveSearchInput>
            </SaveSearchBarContainer>
        </ModalBody>
        <ModalFooter>
            <SaveBtn style={{marginBottom: '10px', marginRight: '5px'}} onClick={handleSaveEdit}>Save</SaveBtn>
        </ModalFooter>
      </Modal>
    </div>
  )
}
