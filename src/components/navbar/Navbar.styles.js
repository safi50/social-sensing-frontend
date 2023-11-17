import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background: transparent;
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 5rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 76.8rem) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  padding: 0 1rem;
  font-size: 1.2rem;

  &:not(:last-child) {
    border-right: 0.1rem solid #fff;
  }
`;

export const PakLogo = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
  border-radius: 100%;
`;

export const BellIconContainer = styled.div`
  position: relative;
  margin-left: 0.5rem;
`;
export const BellIconBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: red;
  padding: 0.2rem 0.5rem;
  color: #fff;
  border-radius: 100%;
`;
export const BellIcon = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
  filter: invert(1);
`;

export const NameIcon = styled.div`
  background-color: white;
  padding: 0.5rem 0.5rem;
  color: black;
  border-radius: 100%;
`;

export const DropIcon = styled.img`
  height: 2.5rem;
  margin-left: 0.5rem;
  filter: invert(1);
`;
