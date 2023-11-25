import React from "react";
import { DashboardContainer, HeaderContainer, Header, ButtonsContainer, RefreshButton, RefreshIcon, DownloadButton, DownloadIcon } from "./Dashboard.styles";

const Dashboard = () =>{
    return (
        <DashboardContainer>
        <HeaderContainer>
        <Header>Listening Analysis</Header>
        <ButtonsContainer>
            <RefreshButton>
            <RefreshIcon src="/refresh-cw-svgrepo-com.svg"/>
            </RefreshButton>
            <DownloadButton><DownloadIcon src="/download-minimalistic-svgrepo-com.svg"/> Download</DownloadButton>
        </ButtonsContainer>
        </HeaderContainer>
        </ DashboardContainer>
    )
}

export default Dashboard