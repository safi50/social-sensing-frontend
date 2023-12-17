import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  position: fixed; // To keep it on the right side
  top: 70px; // Adjust this value based on your navbar's height
  right: 0;
  width: 350px; // Adjust width as needed
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
//   padding: 10px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const TickIcon = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
`;

export const NotificationHeader = styled.h3`
  font-weight: bolder;
  padding: 10px;
`;

export const DateSection = styled.div`
  background-color: #f4f4f4;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const DateText = styled.span`
  font-size: 12px;
  color: #7C7C7C;
`;

export const NotificationItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 0.3px solid #F0F0F0
`;

export const NotificationContent = styled.div`
  padding: 0px 10px;
`;

export const NotificationTitleContainer = styled.div`
display: flex;
justify-content: space-between
`

export const NotificationTitle = styled.span`
  font-weight: bold;
  font-size: 11px
`;

export const NotificationTime = styled.span`
  color: #A7A7A7;
`;

export const NotificationDescription = styled.div`
  color: #969696;
  font-size: 11px
`;

export const EndNotificationContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #6532F1;
    font-size: 14px;
    padding: 10px
`