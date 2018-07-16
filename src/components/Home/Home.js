import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";
import { Divider, MainText } from "../Shared";
import {Route} from 'react-router-dom';
import "./Home.css";
import WorldlyPreview from "../../images/worldly/login_page.png";
import GivPreview from "../../images/giv/user_interests.png";
import PortfolioPreview from "../../images/portfolio.png";
import DLDPreview from "../../images/dld.png";

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
          <Route render={({history}) => (
            <PortfolioImage onClick={()=> history.push('/worldly')}  margin="75px" marginMobile="25px" className="portfolio-image">
              <Image src={WorldlyPreview} />
            </PortfolioImage>
          )}/>
            <PortfolioImageDescriptionContainer className="portfolio-image-description">
              <ProjectRole>CTO / Software Engineer</ProjectRole>
              <ProjectTechContainer>
                <ProjectTech>JavaScript</ProjectTech>
                <ProjectTech>Meteor</ProjectTech>
                <ProjectTech>MongoDB</ProjectTech>
                <ProjectTech>S3</ProjectTech>
                <ProjectTech>Python</ProjectTech>
                <ProjectTech>HTML</ProjectTech>
                <ProjectTech>CSS</ProjectTech>
                <ProjectTech>Git</ProjectTech>
              </ProjectTechContainer>
            </PortfolioImageDescriptionContainer>
          <PortfolioBackground color="#dce9fb" />
          <PortfolioContent>
          <Route render={({history}) => (
            <ProjectName onClick={()=>history.push('/worldly')}>Worldly <span ><i className="fa fa-angle-right"></i></span></ProjectName>
          )}/>
            <ProjectDescription>
              Global learning platform which helps teachers to better educate
              their students on global events. Features an assignment system,
              automated news feed, and other contextual information for global
              understanding.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
          <Route render={({history}) => (
            <ProjectName onClick={()=>history.push('/giv')}>Giv  <span ><i className="fa fa-angle-right"></i></span></ProjectName>
          )}/>
            <ProjectDescription>
              Mobile application (Android & iOS via React Native) to help people
              find and subscribe to reputable charities that suit their
              interests.
            </ProjectDescription>
          </PortfolioContent>
          <Route render={({history}) => (
          <PortfolioImage onClick={()=>history.push('/giv')} marginMobile="245px" margin="75px" left="51%" className="portfolio-image">
            <Image src={GivPreview}  />
          </PortfolioImage>
          )}/>
          <PortfolioImageDescriptionContainer
            left="50%"
            className="portfolio-image-description"
          >
            <ProjectRole>Full-Stack</ProjectRole>
            <ProjectTechContainer>
              <ProjectTech>JavaScript</ProjectTech>
              <ProjectTech>React Native</ProjectTech>
              <ProjectTech>MySQL</ProjectTech>
              <ProjectTech>CSS</ProjectTech>
              <ProjectTech>Node.js</ProjectTech>
              <ProjectTech>Express</ProjectTech>
              <ProjectTech>Git</ProjectTech>
            </ProjectTechContainer>
          </PortfolioImageDescriptionContainer>
          <PortfolioBackground  color="#ffdfdf"/>
        </PortfolioItemRight>

        <PortfolioItemLeft>
          <PortfolioImage className="portfolio-image" marginMobile="260px" margin="75px">
            <Image src={PortfolioPreview} />
          </PortfolioImage>
          <PortfolioImageDescriptionContainer className="portfolio-image-description">
            <ProjectRole>Personal Project</ProjectRole>
            <ProjectTechContainer>
              <ProjectTech>JavaScript</ProjectTech>
              <ProjectTech>HTML</ProjectTech>
              <ProjectTech>CSS</ProjectTech>
              <ProjectTech>Responsive</ProjectTech>
              <ProjectTech>UI</ProjectTech>
              <ProjectTech>UX</ProjectTech>
              <ProjectTech>Git</ProjectTech>
            </ProjectTechContainer>
          </PortfolioImageDescriptionContainer>
          <PortfolioBackground color="#e6deff"  />
          <PortfolioContent>
          <Route render={({history}) => (
            <ProjectName onClick={()=>history.push('/work')}>Portfolio  <span ><i className="fa fa-angle-right"></i></span></ProjectName>
          )}/>
            <ProjectDescription>
              This website was created using React without the help of a CSS
              framework. It is fully responsive and looks great on any screen
              size.
            </ProjectDescription>
          </PortfolioContent>
        </PortfolioItemLeft>

        <PortfolioItemRight>
          <PortfolioContent>
            <ProjectName href="https://www.youtube.com/watch?v=bWJCihilgOo">Don't Look Down!  <span ><i className="fa fa-angle-right"></i></span></ProjectName>
            <ProjectDescription>
              Virtual Reality platforming game where the goal is to ascend
              platforms and avoid enemies. Features procedurally genererated
              platforms and enemies with ever increasing difficulty.
            </ProjectDescription>
          </PortfolioContent>
          <PortfolioImage left="51%" marginMobile="270px" margin="75px" className="portfolio-image">
            <Image src={DLDPreview}  />
          </PortfolioImage>
          <PortfolioImageDescriptionContainer
            left="50%"
            className="portfolio-image-description"
          >
            <ProjectRole>Lead Developer</ProjectRole>
            <ProjectTechContainer>
              <ProjectTech>C#</ProjectTech>
              <ProjectTech>Unity3D</ProjectTech>
              <ProjectTech>HTC Vive</ProjectTech>
              <ProjectTech>Git</ProjectTech>
            </ProjectTechContainer>
          </PortfolioImageDescriptionContainer>
          <PortfolioBackground color="#e1f7d5"  />
        </PortfolioItemRight>
      </PortfolioList>
    </div>
  );
};

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
  margin-bottom: 80px;
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
const ProjectName = styled.a`
  position: relative;
  text-decoration: none;
  color: #333;
  font-size: 1.7em;
  margin-top: 0px;
  margin-bottom: 5px;
  align-self: center;
  ${media.tablet`
    &:hover {
      color: #333;
      cursor: pointer;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #333;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  `}
`;
const ProjectDescription = styled.p`
  margin: 20px;
  font-size: 1rem;
  font-weight: 100;
`;
const PortfolioBackground = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 275px;
  ${media.tablet`
    flex: 1;
    height: 300px;
    width: 50%;
`};
`;

const PortfolioImage = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  margin-top: ${props => props.marginMobile};
  ${media.tablet`
    left: ${props => props.left};
    width: 50%;
    margin-top: ${props => props.margin};
    top: 0;
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
  margin-top: ${props => props.margin} 
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 35px 0 rgba(0, 0, 0, 0.15);
  width: 250px
  border-radius: 7px;
  ${media.tablet`
    width: 240px;
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
  left: ${props => props.left};
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
  justify-content: center;
`;

const ProjectTech = styled.span`
  color: #555;
  font-size: 1rem;
  font-weight: 100;

  &:after {
    content: "·";
    padding: 0 6px;
  }
`;

export default Home;
