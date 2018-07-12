import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";
import { Divider, MainText } from "../Shared";
import "./Home.css";
const SubText = styled.p`
  color: ${props => props.color};
  font-size: 1.2em;
  font-weight: 300;
`;

const TextDivider = styled.span`
  display: inline-block;
  ${media.tablet`display:block;`};
`;

const PortfolioList = styled.div`
  margin: 0;
  padding: 65px 0;
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
  ${media.tablet`flex-direction: row;`};
`;

const PortfolioItemRight = PortfolioItem.extend`
  flex-direction: column;
`;
const PortfolioItemLeft = PortfolioItem.extend`
  flex-direction: column-reverse;
`;
const PortfolioContent = styled.div`
  margin: 0 5px 0px 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ProjectName = styled.h2`
  color: #333;
  font-size: 1.7em;
  margin-top: 0px;
  margin-bottom: 5px;
  align-self: center;
`;
const ProjectDescription = styled.p`
  margin: 20px;
  text-align: center;
`;
const PortfolioBackground = styled.div`
  flex: 1;
  background: ${props => props.color};
  width: 100%;
  height: 275px;
  ${media.tablet`
    height: 300px;
    width: 50%;
  `};
`;

const PortfolioImage = styled.div`
  position: absolute;
  width: 100%;
  display: block;
  overflow: hidden;
  z-index: 100;
  margin-top: 30%;

  ${media.tablet`
    width: 50%;
    margin-top: 0;
    -webkit-transition: filter 300ms ease-in 50ms;
    -moz-transition: filter 300ms ease-in 50ms;
    transition: filter 300ms ease-in 50ms;
    &:hover {
    filter:opacity(25%) blur(25px);
    cursor: pointer;
  }
  `};
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 65px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 35px 0 rgba(0, 0, 0, 0.15);
  width: 250px
  border-radius: 7px;
  ${media.tablet`
    width: 265px;
  `};
  ${media.desktop`
    width: 255px;
  `};
`;

const PortfolioImageDescriptionContainer = styled.div`
  position: absolute;
  width: 50%;
  display: none;
  flex-direction: column;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${media.tablet`
    display: flex;
  `};
`;

const ProjectRole = styled.h2`
  color: #333;
  font-size: 1.4em;
  margin-top: 0px;
  margin-bottom: 5px;
  align-self: center;

  &:after {
    content: "";
    display: block;

    width: 50px;
    height: 2px;
    background: #333;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const ProjectTechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProjectTech = styled.span`
  color: #555;
  font-size: 1.1rem;
  font-weight: 100;

  &:after {
    content: "·";
    padding: 0 6px;
  }
`;

const Home = props => {
  return (
    <div>
      <MainText>Vijay Dhanota</MainText>
      <Divider />
      <br />
      <SubText color="#999">
        Passionate and mission-driven full stack engineer<TextDivider /> with an
        aptitude for development, teaching, and collaboration
      </SubText>
      <PortfolioList>
        <PortfolioItemLeft>
          <PortfolioImage className="portfolio-image">
            <Image src="https://images.unsplash.com/photo-1531299411897-f9adcfb1a333?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d4c981002e3298ac736245e85414c36&auto=format&fit=crop&w=1868&q=80" />
          </PortfolioImage>
          <PortfolioImageDescriptionContainer className="portfolio-image-description">
            <ProjectRole>CTO / Software Engineer</ProjectRole>
            <ProjectTechContainer>
              <ProjectTech>JavaScript</ProjectTech>
              <ProjectTech>Python</ProjectTech>
              <ProjectTech>HTML</ProjectTech>
              <ProjectTech>CSS</ProjectTech>
            </ProjectTechContainer>
          </PortfolioImageDescriptionContainer>
          <PortfolioBackground color="#dce9fb" />
          <PortfolioContent>
            <ProjectName>Worldly</ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
            <ProjectName>Crypto Converter</ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
          <PortfolioBackground color="#ffdfdf" />
        </PortfolioItemRight>

        <PortfolioItemLeft>
          <PortfolioBackground color="#e6deff" />
          <PortfolioContent>
            <ProjectName>Don't Look Down!</ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
            <ProjectName>Portfolio</ProjectName>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum vel mi id fermentum. Donec sed facilisis quam. Lorem ipsum.
            </ProjectDescription>
          </PortfolioContent>
          <PortfolioBackground color="#e1f7d5" />
        </PortfolioItemRight>
      </PortfolioList>
    </div>
  );
};

export default Home;
