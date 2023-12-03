import React, { useState } from "react";
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

const MySearchesItem = ({ item, handleEditSearch, handleDeleteSearch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newName, setNewName] = useState(item.name);
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
