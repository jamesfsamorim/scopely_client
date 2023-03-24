import styled from "styled-components";
import {CenterContainer, imageBackground} from "../../global.style";
import register from '../../../assets/images/register.jpg'

export const RegisterContainer = styled(CenterContainer)`
  background-image: url(${register.src});
  ${imageBackground};
  
  > * {
    width: 50%;
  }
`