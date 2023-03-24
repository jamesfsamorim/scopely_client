import styled from "styled-components";
import {CenterContainer, imageBackground} from "../../global.style";
import login from '../../../assets/images/login.jpeg'

export const LoginContainer = styled(CenterContainer)`
  background-image: url(${login.src});
  ${imageBackground};
  
  > * {
    width: 50%;
  }
`

export const RedirectSpan = styled.span`
  cursor: pointer;
  
  :hover {
    color: #3f96ff;
  }
`