import React, {useState} from "react";
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
} from "./Navbar.styles";
import Filters from "../filters/Filters.component";
import Notifications from "../notifications/Notifications.component";

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);


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
        <NavLinkContainer to="/">
          <PakLogo
            src="https://iopproduction.s3.eu-central-1.amazonaws.com/flags/pakistan.png"
            alt="Flag"
          />
        </NavLinkContainer>
        <NavLinkContainer>
          ENG
          <BellIconContainer onClick={toggleNotifications}>
            <BellIcon src="/notification-bell.svg" />
            <BellIconBadge>1</BellIconBadge>
          </BellIconContainer>
        </NavLinkContainer>
        <NavLinkContainer onClick={toggleFilters}>
          <NameIcon>IH</NameIcon>
          <DropIcon src="/dropdown.svg" />
        </NavLinkContainer>
        {showFilters && <Filters />}
        {showNotifications && <Notifications />}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
