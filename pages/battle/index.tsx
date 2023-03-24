import {
    AttackCommandActions,
    BattleContainer,
    HudContainer,
    OpponentCharacterContainer, OpponentHudContainer,
    PlayerCharacterContainer
} from "../../styles/pages/battle/battle.style";
import {TransparentCard} from "../../styles/global.style";
import {Avatar, Button, Progress} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {UserInfo} from "../../styles/index.style";

export default function Battle() {
    return (
        <BattleContainer>
            <OpponentHudContainer>
                <UserInfo>
                    <Avatar style={{backgroundColor: 'darkgray'}} icon={<UserOutlined/>}/>
                    <span>Nome do Oponente</span>
                </UserInfo>
                <Progress percent={100} strokeColor={{ '0%': '#e91010', '100%': '#87d068' }} />
            </OpponentHudContainer>

            <PlayerCharacterContainer/>

            <OpponentCharacterContainer/>

            <HudContainer>
                <UserInfo>
                    <Avatar style={{backgroundColor: 'darkgray'}} icon={<UserOutlined/>}/>
                    <span>Nome do Usuario</span>
                </UserInfo>

                <Progress percent={100} strokeColor={{ '0%': '#e91010', '100%': '#87d068' }} />

                <TransparentCard>
                    <AttackCommandActions>
                        <Button style={{width: '100%', height: '100%'}}>Attack A</Button>
                        <Button style={{width: '100%', height: '100%'}}>Attack B</Button>
                        <Button style={{width: '100%', height: '100%'}}>Attack C</Button>
                        <Button style={{width: '100%', height: '100%'}}>Attack D</Button>
                    </AttackCommandActions>
                </TransparentCard>
            </HudContainer>
        </BattleContainer>
    )
}