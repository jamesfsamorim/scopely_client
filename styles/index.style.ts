import {Card, Layout} from "antd";
import styled, {css} from "styled-components";
import background from "../assets/images/camp.jpeg";
import battle from "../assets/images/battle.jpeg";
import leaderboard from "../assets/images/leaderboard.jpeg";
import {imageBackground, knightFont} from "./global.style";

const { Header, Content } = Layout;

const imageBackgroundWithAlign = css`
  ${imageBackground};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  font-family: ${knightFont.style.fontFamily};
  font-size: 28px;
  font-weight: bold;
  text-shadow: 2px 2px black;
  transition: all .3s ease-in;
  background-size: 100%;
  cursor: pointer;
  
  :hover {
    background-size: 120%;
    filter: drop-shadow(4px 8px 8px black);
    text-shadow: 4px 4px black;
    box-shadow: inset 0px 0px 20px 20px rgba(0, 0, 0, .5);
  }
`

export const HomeLayout = styled(Layout)`
  background-image: url(${background.src});
  ${imageBackground};
`

export const HomeHeader = styled(Header)`
  background-color: black;
  color: white;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
`

export const HomeContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin: 20px 25%;
  gap: 10px;
`

export const LeaderboardCard = styled(Card)`
  background-image: url(${leaderboard.src});
  ${imageBackgroundWithAlign};
`

export const BattleCard = styled(Card)`
  background-image: url(${battle.src});
  ${imageBackgroundWithAlign};
`

export const UserInfo = styled.div`
  cursor: pointer;
`