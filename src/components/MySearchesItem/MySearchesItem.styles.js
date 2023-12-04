import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: #f5f2ff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitle = styled.p`
  font-size: 1em;
  color: #333;
`;

export const ItemDate = styled.span`
  color: #666;
  font-size: 12px;
`;

export const HashtagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Hashtag = styled.span`
  color: #6735f2;
  background-color: #e6ddfe;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 0.8em;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: #f6f6f6;
  border: none;
  padding: 10px;
  font-size: 1em;
  resize: none;
`;

export const RenameButton = styled.button`
  background-color: #6631f7;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.9em;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: #8752ff;
  border: 1px solid #8752ff;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.9em;
  cursor: pointer;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #e53030;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 0.9em;
  cursor: pointer;
`;

export const UpdateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
