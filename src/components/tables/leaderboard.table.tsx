import {Space, Table} from "antd";
import {useEffect, useState} from "react";
import {authService} from "../../services";

interface LeaderboardPlayer {
    id: number;
    name: string;
    rank: number;
    score: number;
}

export const LeaderboardTable = () => {
    const [players, setPlayers] = useState<LeaderboardPlayer[]>([]);

    useEffect(() => {
        const getPlayerLeaderboard = async () => {
            const {data} = await authService.getPlayerLeaderboard();
            setPlayers(data);
        }

        getPlayerLeaderboard()
    }, [])

    const columns = [
        {
            title: 'Rank/Position',
            key: 'rank',
            render: (_, record, index) => (
                <Space size="middle">{index + 1}</Space>
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        },
    ];

    return (
        <Table columns={columns} dataSource={players} rowKey='id'/>
    )
}