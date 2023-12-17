import React from 'react'
import { NotificationsContainer, 
        TickIcon, 
        NotificationHeader,
        DateSection,
        DateText,
        NotificationItem,
        NotificationContent,
        NotificationTitle,
        NotificationTime,
        NotificationDescription,
        NotificationTitleContainer,
        EndNotificationContainer } from './Notifications.styles'

function Notifications() {
    return (
        <NotificationsContainer>
            <NotificationHeader>Notifications</NotificationHeader>
            <DateSection>
              <DateText>Today</DateText>
            </DateSection>
            <NotificationItem>
              <TickIcon src="/tick-svgrepo-com.svg"/>
              <NotificationContent>
                <NotificationTitleContainer>
                  <NotificationTitle>Email Verified</NotificationTitle>
                  <NotificationTime>Now 02 Jan 2022</NotificationTime>
                </NotificationTitleContainer>
                <NotificationDescription>
                  Your email address associated with this account has been verified
                </NotificationDescription>
              </NotificationContent>
            </NotificationItem>
            <NotificationItem>
              <TickIcon src="/download-circle-minimalistic-svgrepo-com.svg"/>
              <NotificationContent>
                <NotificationTitleContainer>
                  <NotificationTitle>Download Successful</NotificationTitle>
                  <NotificationTime>10:20pm 02 Jan 2022</NotificationTime>
                </NotificationTitleContainer>
                <NotificationDescription>
                  Your company report has been successfully downloaded
                </NotificationDescription>
              </NotificationContent>
            </NotificationItem>
            <DateSection>
              <DateText>Yesturday</DateText>
            </DateSection>
            <NotificationItem>
              <TickIcon src="/download-circle-minimalistic-svgrepo-com.svg"/>
              <NotificationContent>
                <NotificationTitleContainer>
                  <NotificationTitle>Download Successful</NotificationTitle>
                  <NotificationTime>10:20pm 02 Jan 2022</NotificationTime>
                </NotificationTitleContainer>
                <NotificationDescription>
                  Your company report has been successfully downloaded
                </NotificationDescription>
              </NotificationContent>
            </NotificationItem>
            <EndNotificationContainer>
                View all notifications
            </EndNotificationContainer>
        </NotificationsContainer>
      )
}

export default Notifications