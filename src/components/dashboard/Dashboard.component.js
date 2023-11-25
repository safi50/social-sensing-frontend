import React from "react";
import { DashboardContainer, HeaderContainer, Header, ButtonsContainer, RefreshButton, RefreshIcon, DownloadButton, DownloadIcon, SubHeadingContainer, HashtagContainer, PurpleCircle, HashtagText, CompareContainer, PurplePlus, CompareKeywordText, SaveSearchContainer, HeartIcon, SaveSerchText, BarIcon, DisabledContainer, FolderIcon, DisabledText, RightContainer } from "./Dashboard.styles";

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
        <SubHeadingContainer>
            <div style={{display: "flex", alignItems: 'center', gap: '10px'}}>
            <HashtagContainer> 
                <PurpleCircle src="/purple-circle-svgrepo-com.svg"/>
                 <HashtagText>#lahorecarshow</HashtagText> 
            </HashtagContainer>
            <CompareContainer>
                <PurplePlus src="/plus-large-svgrepo-com.svg"/>
                <CompareKeywordText>Compare keyword</CompareKeywordText>
            </CompareContainer>
            </div>
            <RightContainer>
            <SaveSearchContainer>
                <HeartIcon src="/heart-svgrepo-com.svg"/>
                <SaveSerchText>Save Search</SaveSerchText>
            </SaveSearchContainer>
            <BarIcon src="/bar-svgrepo-com.svg"/>
            <DisabledContainer>
                <FolderIcon src="/folder-svgrepo-com.svg"/>
                <DisabledText>My Searches</DisabledText>
            </DisabledContainer>
            </RightContainer>
        </SubHeadingContainer>
        </ DashboardContainer>
    )
}

export default Dashboard