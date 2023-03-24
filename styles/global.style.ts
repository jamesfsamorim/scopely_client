import styled, {css} from "styled-components";
import localFont from "@next/font/local";
import {Button, Card, Input} from "antd";

export const knightFont = localFont({ src: '../assets/fonts/KnightVision-p7Ezy.ttf' });

export const imageBackground = css`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  font-family: ${knightFont.style.fontFamily};
  font-size: 20px;
`

export const InputForm = styled(Input)`
  background-color: rgba(255, 255, 255, 0.44);
  
  > input {
    background-color: rgb(228 222 213 / 0%);  
  }
`

export const TransparentCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.44);

  .ant-card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const pulseAnimation = css`
  @keyframes pulse {
    0%,
    100% {
      animation-timing-function: ease-in;
    }
    50% {
      transform: scale(1.33);
    }
  }
`

export const PulseButton = styled(Button)`
  ${pulseAnimation}
  :hover {
    animation: pulse 1.5s infinite;
  }
`