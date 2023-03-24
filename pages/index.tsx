import {Avatar, Badge, Button, Dropdown, Modal} from "antd";
import type { MenuProps } from 'antd';
import {UserOutlined} from "@ant-design/icons";
import {GiCrossedSwords, GiQueenCrown, GiTwoCoins} from "react-icons/gi";
import {BattleCard, HomeContent, HomeHeader, HomeLayout, LeaderboardCard, UserInfo} from "../styles/index.style";
import {useEffect, useState} from "react";
import {LeaderboardTable} from "../src/components/tables/leaderboard.table";
import {BattleTable} from "../src/components/tables/battle.table";
import {useCurrentUser} from "../src/hooks/auth/useCurrentUser";
import {useLogout} from "../src/hooks/auth/useLogout";
import {useRouter} from "next/router";
import {battleClient} from "../src/services";

export default function Home() {
    const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
    const [isBattleOpen, setIsBattleOpen] = useState(false);
    const { user } = useCurrentUser();
    const { logout } = useLogout();
    const { push } = useRouter();

    useEffect(() => {
        battleClient.connection()
    }, [])

    const showLeaderboardModal = () => {
        setIsLeaderboardOpen(true);
    };

    const closeLeaderboardModal = () => {
        setIsLeaderboardOpen(false);
    };

    const showBattleModal = () => {
        setIsBattleOpen(true);
    };

    const closeBattleModal = () => {
        setIsBattleOpen(false);
    };

    const logoutUser = async () => {
        logout()
        await push('/login')
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span onClick={logoutUser}>
                    Logout
                </span>
            ),
        },
    ];

    return (
        <HomeLayout>
            <HomeHeader>
                <span>
                    <GiTwoCoins style={{fontSize: "18px", marginBottom: "-3px"}} color="yellow"/> {user && user.gold}
                </span>
                <Badge size="default" count={5} style={{marginTop: "5px"}}>
                    <Button type="primary" danger shape="circle" style={{marginTop: "5px"}}>
                        <GiCrossedSwords style={{fontSize: "18px"}}/>
                    </Button>
                </Badge>
                <Dropdown menu={{ items }} placement="bottom" trigger={['click']} arrow>
                    <UserInfo>
                        <Avatar style={{backgroundColor: 'darkgray'}} icon={<UserOutlined/>}/>
                        <span>{user && user.name}</span>
                    </UserInfo>
                </Dropdown>
            </HomeHeader>
            <HomeContent>
                <LeaderboardCard onClick={showLeaderboardModal}>
                    <span>LeaderBoard <GiQueenCrown/></span>
                </LeaderboardCard>
                <BattleCard onClick={showBattleModal}>
                    <span>Battle <GiCrossedSwords/></span>
                </BattleCard>
            </HomeContent>

            <Modal open={isLeaderboardOpen} onCancel={closeLeaderboardModal} onOk={closeLeaderboardModal} destroyOnClose>
                <LeaderboardTable />
            </Modal>

            <Modal open={isBattleOpen} onCancel={closeBattleModal} onOk={closeBattleModal} destroyOnClose>
                <BattleTable />
            </Modal>
        </HomeLayout>
    )
}
