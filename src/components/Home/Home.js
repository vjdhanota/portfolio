import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";
import {Divider, MainText} from '../Shared';
const SubText = styled.p`
  color: #999;
  font-size: 1.2em;
  font-weight: 300;
`;
// const MainText = styled.h1`
//   color: #333;
//   font-size: 2.3em;
// `;
const ProjectName = styled.h2`
  color: #333;
  font-size: 1.7em;
  margin-top: 0px;
`;
const TextDivider = styled.span`
  display: block;
  ${media.tablet`display:inline-block;`};
`;

// const Divider = styled.hr`
//   height: 6px;
//   background: url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0
//     0;
//   border: 0;
//   width: 147px;
//   float: left;
//   ${media.tablet`width: 105px;`};
// `;
const PortfolioList = styled.div`
  margin: 0;
  padding: 65px 0;
`;
const PortfolioItem = styled.div`
  display: flex;
  margin-bottom: 100px;
  ${media.tablet`width: 100%;`};
`;
const PortfolioContent = styled.div`
  /* margin: 15px; */
  flex: 1;
  display: flex;
  justify-content: center;
  
`
const PortfolioBackground = styled.div`
  flex: 1;
  height: 300px;
  background: ${props => props.color};
`;

const Home = props => {
  return (
    <div>
      <MainText>Vijay Dhanota</MainText>
      <Divider />
      <br />
      <SubText>
        Passionate and mission-driven full stack engineer<TextDivider /> with an
        aptitude for development, teaching, and collaboration
      </SubText>
      <PortfolioList>
        <PortfolioItem>
          <PortfolioBackground color="#dce9fb" />
          <PortfolioContent>
            <ProjectName>
              Worldly
            </ProjectName>
          </PortfolioContent>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioContent>
            <ProjectName>
              Crypto Converter
            </ProjectName>
          </PortfolioContent>
          <PortfolioBackground color="#ffdfdf" />
        </PortfolioItem>
      </PortfolioList>
    </div>
  );
};

export default Home;
