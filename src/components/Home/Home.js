import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";
import {Divider, MainText} from '../Shared';

const SubText = styled.p`
  color: #999;
  font-size: 1.2em;
  font-weight: 300;
`;


const TextDivider = styled.span`
  display: block;
  ${media.tablet`display:inline-block;`};
`;

const PortfolioList = styled.div`
  margin: 0;
  padding: 65px 0;
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  ${media.tablet`flex-direction: column-reverse;`};
`;

const PortfolioItemRight = PortfolioItem.extend`
  ${media.tablet`flex-direction: column;`};
`;
const PortfolioItemLeft = PortfolioItem.extend`
  ${media.tablet`flex-direction: column-reverse;`};
`;
const PortfolioContent = styled.div`
  margin: 0 5px 0px 5px;
  flex: 1;
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
  flex-direction: column;
  
`
const ProjectName = styled.h2`
  color: #333;
  font-size: 1.7em;
  margin-top: 0px;
  margin-bottom: 5px;
  align-self: center;
`;
const ProjectDescription = styled.p`
  margin: 20px;
`
const PortfolioBackground = styled.div`
  flex: 1;
  height: 325px;
  background: ${props => props.color};
  ${media.tablet`
    width: 100%;
    height: 275px;
  `};

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
        <PortfolioItemLeft>
          <PortfolioBackground color="#dce9fb" />
          <PortfolioContent>
            <ProjectName>
              Worldly
            </ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
            <ProjectName>
              Crypto Converter
            </ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription> 
          </PortfolioContent>
          <PortfolioBackground color="#ffdfdf" />
        </PortfolioItemRight>

        <PortfolioItemLeft>
          <PortfolioBackground color="#e6deff" />
          <PortfolioContent>
            <ProjectName>
              Don't Look Down!
            </ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
            <ProjectName>
              Portfolio
            </ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription> 
          </PortfolioContent>
          <PortfolioBackground color="#e1f7d5" />
        </PortfolioItemRight>
      </PortfolioList>
    </div>
  );
};

export default Home;
