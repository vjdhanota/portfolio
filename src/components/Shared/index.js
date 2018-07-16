import styled from "styled-components";
import { media } from "../style-utils.js";
import hr from '../../images/hr.png';
const MainText = styled.h1`
  color: #333;
  font-size: 2.3em;
`;


const Divider = styled.hr`
  height: 6px;
  background: url(${hr}) repeat-x 0
    0;
  border: 0;
  width: 147px;
  float: left;
  ${media.tablet`width: 105px;`};
`;

export {
  MainText,
  Divider
}