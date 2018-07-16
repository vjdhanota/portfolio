import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import Resume from '../../VijayDhanotaResume.pdf';
import styled from "styled-components";
import { media } from "../style-utils.js";
import { MainText } from "../Shared";


class About extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber } = this.state;
    return (
      <div>
        <MainText>Resume</MainText>
        <ResumeWarning>Under construction for mobile...</ResumeWarning>
        <ResumeWarning>Here's a  <a href="https://drive.google.com/file/d/18mTxzUjxm_8RcG5Ro7uvuqBDKFDe0XZy/view?usp=sharing">link</a> to the resume instead</ResumeWarning>
        {window.innerWidth > 647 && <ResumeContainer>
          <Document
            file={Resume}
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </ResumeContainer> }
        
      </div>
    );
  }
}

const ResumeContainer = styled.div`

  display: none;
  visibility: hidden;
  ${media.tablet`
    display:flex;
    justify-content: center;
    visibility: visible;
  `}
`

const ResumeWarning = styled.p`
  ${media.tablet`
    visibility: hidden;
  `}
`

export default About;