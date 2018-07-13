import React from "react";
import styled from "styled-components";
import { media } from "../style-utils.js";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Letter = styled.h1`
  padding: 0;
  margin: 0;
  color: ${props => props.color};
  font-size: 10rem;
  ${media.tablet`
    font-size: 15rem;
  `}
`

const Message = styled.h3`
  color: ${props => props.color};
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  ${media.tablet`
    font-size: 4rem;
  `}
`


const NotFound = () => {
  return (
    <div>
      <NotFoundContainer>
        <Letter color="#dce9fb">4</Letter> 
        <Letter color="#ffdfdf">0</Letter> 
        <Letter color="#e6deff">4</Letter> 
      </NotFoundContainer>
        <Message color="#e1f7d5">Something went wrong...</Message>
    </div>

  )
}

export default NotFound;