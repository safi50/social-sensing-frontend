import React from "react";
import { DashboardContainer, HeaderContainer, Header, ButtonsContainer, RefreshButton, RefreshIcon, DownloadButton, DownloadIcon, SubHeadingContainer, HashtagContainer, PurpleCircle, HashtagText, CompareContainer, PurplePlus, CompareKeywordText, SaveSearchContainer, HeartIcon, SaveSerchText, BarIcon, DisabledContainer, FolderIcon, DisabledText, RightContainer, LeftContainer, SelectionContainer, FiltersContainer, DateContainer, SelectionHeading, FilterItem, MoreItem, CountBox, FilterItemsRow, DurationBtn, DateItemRow, DurationBtnSelected, DateInputContainer, DateInput, CrossIcon, CrossBtn } from "./Dashboard.styles";
import Navbar from "../navbar/Navbar.component";


const Dashboard = () =>{
    return (
        <div style={{backgroundColor: '#6937F2'}}>
        <Navbar />
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
            <LeftContainer>
            <HashtagContainer> 
                <PurpleCircle src="/purple-circle-svgrepo-com.svg"/>
                 <HashtagText>#lahorecarshow</HashtagText> 
            </HashtagContainer>
            <CompareContainer>
                <PurplePlus src="/plus-large-svgrepo-com.svg"/>
                <CompareKeywordText>Compare keyword</CompareKeywordText>
            </CompareContainer>
            </LeftContainer>
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
        <SelectionContainer>
            <FiltersContainer>
                <SelectionHeading>Filters</SelectionHeading>
                <FilterItemsRow>
                <FilterItem>Sentiments <CountBox>2</CountBox></FilterItem>
                <FilterItem>Media type <CountBox>2</CountBox></FilterItem>
                <FilterItem>Language <CountBox>3</CountBox></FilterItem>
                <FilterItem>Country/Region <CountBox>2</CountBox></FilterItem>
                <MoreItem><PurplePlus src="/plus-large-svgrepo-com.svg"/>More</MoreItem>
                </FilterItemsRow>
            </FiltersContainer>
            <DateContainer>
                <SelectionHeading style={{paddingLeft: "50px"}}>Date</SelectionHeading>
                <DateItemRow>
                    <CrossBtn><CrossIcon src="/cross-svgrepo-com.svg"/></CrossBtn>
                    <BarIcon src="/bar-svgrepo-com.svg"/>
                    
                    <DurationBtn>1d</DurationBtn>
                    <DurationBtnSelected>7d</DurationBtnSelected>
                    <DurationBtn>1M</DurationBtn>
                    <DateInputContainer>
                        <DateInput />
                    </DateInputContainer>
                </DateItemRow>
            </DateContainer>
        </SelectionContainer>
        </ DashboardContainer>
        </div>
    )
}

export default Dashboard