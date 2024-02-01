import React, { useState, useContext } from "react";
import {
  ItemContainer,
  ItemDate,
  ItemHeader,
  ItemTitle,
  HashtagContainer,
  Hashtag,
  EditTextarea,
  RenameButton,
  UpdateContainer,
  CancelButton,
  DeleteButton,
} from "./MySearchesItem.styles";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../worldwideDropdown/worldwideDropdown.styles";

const MySearchesItem = ({ item, handleEditSearch, handleDeleteSearch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const {
    data,
    deleteDataByName,
    filters: contextFilters,
    setFilters: setContextFilters,
  } = useContext(CompareKeywordContext);

  const navigate = useNavigate();

  const handleUseSavedSearch = ()=>{
    console.log("continue with saved search:", item)
    setContextFilters({...contextFilters, eventNames: item.labels, eventQueries: item.hashtags})
    item.labels.length <=1? navigate('/dashboard'): navigate('/dashboard/compare-keyword')
  }

  return (
    <ItemContainer>
      {!isEditing && !isDeleting && (
        <ItemHeader>
          <ItemTitle>{item.name}</ItemTitle>
          <div>
            <img
              src="/edit.svg"
              onClick={() => setIsEditing(true)}
              style={{ marginRight: "5px" }}
            />
            <img src="/trash-2.svg" onClick={() => setIsDeleting(true)} />
            <SearchIcon src="/search-btn-purple.svg" style={{paddingLeft: '4px'}} onClick={handleUseSavedSearch}/>
          </div>
        </ItemHeader>
      )}
      {!isEditing && !isDeleting && (
        <ItemHeader>
          <HashtagContainer>
            {item.hashtags.map((hashtag, index) => (
              <Hashtag key={index}>{hashtag}</Hashtag>
            ))}
          </HashtagContainer>
          <ItemDate>{item.date}</ItemDate>
        </ItemHeader>
      )}

      {isEditing && (
        <div>
          <EditTextarea
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <UpdateContainer>
            <RenameButton
              onClick={() => {
                handleEditSearch(item.id, newName);
                setIsEditing(false);
              }}
            >
              Rename
            </RenameButton>
          </UpdateContainer>
        </div>
      )}
      {isDeleting && (
        <div>
          <EditTextarea value={"Are you sure to delete query"} readOnly />
          <UpdateContainer>
            <CancelButton onClick={() => setIsDeleting(false)}>
              Cancel
            </CancelButton>
            <DeleteButton
              onClick={() => {
                handleDeleteSearch(item.id);
                setIsDeleting(false);
              }}
            >
              Delete
            </DeleteButton>
          </UpdateContainer>
        </div>
      )}
    </ItemContainer>
  );
};

export default MySearchesItem;
