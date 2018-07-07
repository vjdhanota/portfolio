import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import Resume from '../../VijayDhanotaResume.pdf';
import styled from "styled-components";
import { media } from "../style-utils.js";


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
      <ResumeContainer>
        <Document
          file={Resume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </ResumeContainer>
    );
  }
}

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default About;