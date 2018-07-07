import styled from "styled-components";
import { media } from "../style-utils.js";

const MainText = styled.h1`
  color: #333;
  font-size: 2.3em;
`;

const Divider = styled.hr`
  height: 6px;
  background: url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0
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