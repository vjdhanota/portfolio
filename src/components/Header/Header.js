import React from "react";
import styled from "styled-components";
import logo from "../../logo-name.png";
import { NavLink, Route } from "react-router-dom";
import { media } from "../style-utils.js";

const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 45px 0 60px;
  ${media.tablet`padding: 55px 0 55px;`}
`;
const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-direction: column; 
  ${media.tablet`flex-direction: row;`}
  ${media.desktop`padding-left: 0;`}
`;

const NavbarItem = styled.li`
  display: block;
  width: 60px;
  margin-left: 45px;
  align-self: flex-end;
`;

const NavbarLink = styled(NavLink)`
  color: #999;
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

const NavbarLogo = styled.img`
  display: block;
  &:hover {
    cursor: pointer;
  }
`;
const navLinks = ["work", "about", "contact"];
const renderNavLink = linkName => {
  
  return (
    <NavbarItem key={linkName}>
     <NavbarLink activeStyle={{ color: "#333" }} to={`/${linkName}`}>
        {linkName.charAt(0).toUpperCase() + linkName.substr(1)}
      </NavbarLink>
    </NavbarItem>
  );
};

const Header = props => {
  return (
    <NavbarContainer>
      <Route render={({history}) => (
        <NavbarLogo src={logo} width="75px" height="75px" alt="logo" onClick={() => history.push('/work')} />
      )}/>
      <Navbar>
        {navLinks.map(linkName => renderNavLink(linkName))}
      </Navbar>
    </NavbarContainer>
  );
};
export default Header;
