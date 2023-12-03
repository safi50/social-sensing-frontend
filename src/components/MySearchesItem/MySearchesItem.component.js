import React from "react";
import { ItemContainer, ItemDate, ItemHeader, ItemTitle, HashtagContainer, Hashtag } from "./MySearchesItem.styles";

const MySearchesItem = ({item})=>{
    return (
        <ItemContainer>
          <ItemHeader>
            <ItemTitle>{item.name}</ItemTitle>
            edit | delete
          </ItemHeader>
          <ItemHeader>
            <HashtagContainer>
                {item.hashtags.map((hashtag, index) => (
                <Hashtag key={index}>{hashtag}</Hashtag>
                ))}
            </HashtagContainer>
            <ItemDate>{item.date}</ItemDate>
          </ItemHeader>
          
        </ItemContainer>
      );
}

export default MySearchesItem