import React from 'react';
import styled from "styled-components";
import { media } from "../style-utils.js";

const FooterContainer = styled.div`
  position: sticky;
  background-color: grey;
`

const Footer = props => <FooterContainer><h1>hello</h1></FooterContainer>

export default Footer;