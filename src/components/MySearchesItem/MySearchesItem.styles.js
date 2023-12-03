import styled from 'styled-components';


export const ItemContainer = styled.div`
  background-color: #F5F2FF;
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
  font-size: 12px
`;

export const HashtagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Hashtag = styled.span`
  color: #6735F2;
  background-color: #E6DDFE;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 0.8em;
`;