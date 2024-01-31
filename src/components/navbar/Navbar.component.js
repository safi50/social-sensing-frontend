import React, {useState, useContext} from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLinkContainer,
  PakLogo,
  BellIcon,
  BellIconContainer,
  BellIconBadge,
  NameIcon,
  DropIcon,
  LogoutIcon,
} from "./Navbar.styles";
import Filters from "../filters/Filters.component";
import Notifications from "../notifications/Notifications.component";
import { useNavigate, useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { CompareKeywordContext } from '../../contexts/CompareKeyword.context';


const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    filters: contextFilters,
  } = useContext(CompareKeywordContext);

  const toggleFilters = () => {
    setShowNotifications(false)
    setShowFilters(prevShowFilters => !prevShowFilters);
  };

  const toggleNotifications = () => {
    setShowFilters(false)
    setShowNotifications(prevShowNotifications => !prevShowNotifications);
  };


  return (
    <NavbarContainer>
      <Logo
        src="https://app.walee.pk/assets/walee/logo/walee-white.png"
        alt="Walee Logo"
      />
      <NavLinks>
      <NavLinkContainer to="/dashboard" onClick={() => {navigate('/searchPage')}}>
      <span style={{ opacity: location.pathname === '/searchPage' ? 1 : 0.5 }}>Home</span>

        </NavLinkContainer>
        <NavLinkContainer to="/dashboard" onClick={() => {contextFilters.eventNames.length > 1? navigate('/dashboard/compare-keyword'): navigate('/dashboard')}}>
          <span style={{ opacity: location.pathname.includes('/dashboard') ? 1 : 0.5 }}>Listening Analysis</span>
        </NavLinkContainer>
        <NavLinkContainer to="/dashboard" onClick={() => {navigate('/topResults')}}>
          <span style={{ opacity: location.pathname === '/topResults' ? 1 : 0.5 }}>Results</span>
        </NavLinkContainer>
        <NavLinkContainer to="/">
          <PakLogo
            src="https://iopproduction.s3.eu-central-1.amazonaws.com/flags/pakistan.png"
            alt="Flag"
          />
        </NavLinkContainer>
        <NavLinkContainer>
          ENG
          <Tooltip title={<span style={{ fontSize: '10px' }}>Notifications</span>}>
          <BellIconContainer onClick={toggleNotifications}>
            <BellIcon src="/notification-bell.svg" />
            <BellIconBadge>1</BellIconBadge>
          </BellIconContainer>
          </Tooltip>
        </NavLinkContainer>
        <Tooltip title={<span style={{ fontSize: '10px' }}>Filters</span>}>
        <NavLinkContainer onClick={toggleFilters}>
            <NameIcon>IH</NameIcon>
            <DropIcon src="/dropdown.svg" />         
        </NavLinkContainer>
        </Tooltip>
        {showFilters && <Filters />}
        {showNotifications && <Notifications />}
        <NavLinkContainer>
          <Tooltip title={<span style={{ fontSize: '10px' }}>Log Out</span>}>
            <LogoutIcon src="/logout-svgrepo-com.svg" onClick={() => {navigate('/signin')}}/>
          </Tooltip>
          
        </NavLinkContainer>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
