import React from 'react';
import styled from "styled-components";
import { media } from "../style-utils.js";

const FooterContainer = styled.div`
  /* position: sticky; */
  height: 50px;
`
const SocialMediaLink = styled.a`
  color:#333;
  margin: .5rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: #888;
  }
`

const Footer = () => {
  return(
    <FooterContainer>
      <SocialMediaLink href="https://www.linkedin.com/in/vijay-dhanota-717987138/"><i className="fa fa-linkedin"></i></SocialMediaLink>
      <SocialMediaLink href="https://www.github.com/vjdhanota"><i className="fa fa-github"></i></SocialMediaLink>
    </FooterContainer>

  )
}
export default Footer;