import React from "react";
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

const Navbar = () => {
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
          <BellIconContainer>
            <BellIcon src="/notification-bell.svg" />
            <BellIconBadge>1</BellIconBadge>
          </BellIconContainer>
        </NavLinkContainer>
        <NavLinkContainer>
          <NameIcon>IH</NameIcon>
          <DropIcon src="/dropdown.svg" />
        </NavLinkContainer>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
