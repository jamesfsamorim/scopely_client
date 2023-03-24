import styled from "styled-components";
import {imageBackground} from "../../global.style";
import battlefield from "../../../assets/images/battlefield.jpg";
import player from "../../../assets/images/character.png";
import opponent from "../../../assets/images/character2.png";

export const BattleContainer = styled.div`
  background-image: url(${battlefield.src});
  ${imageBackground};
  
  display: grid;
  grid-template-areas:
    'header opponent-hud'
    'player opponent'
    'hud menu';
  grid-template-columns: 49% 49%;
  grid-template-rows: 12% 58% 25%;
  gap: 10px;
`

export const HudContainer = styled.div`
  grid-area: hud;
  padding-left: 10px;
`

export const AttackCommandActions = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-template-rows: 49% 49%;
  gap: 10px;
`

export const PlayerCharacterContainer = styled.div`
  background-image: url(${player.src});
  ${imageBackground};

  background-size: contain;
  grid-area: player;
  justify-content: center;
`

export const OpponentCharacterContainer = styled.div`
  background-image: url(${opponent.src});
  ${imageBackground};

  background-size: contain;
  grid-area: opponent;
  justify-content: center;
`

export const OpponentHudContainer = styled.div`
  grid-area: opponent-hud;
  justify-content: right;
  padding-top: 10px;
`