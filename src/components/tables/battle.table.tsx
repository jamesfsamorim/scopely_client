import {Space, Table, Tag} from "antd";
import {GiCrossedSwords} from "react-icons/gi";
import {PulseButton} from "../../../styles/global.style";
import {useEffect, useState} from "react";
import {battleClient} from "../../services";

export interface BattlePlayer {
    id: number;
    name: string;
    gold: number;
    score: number;
    status: boolean;
}

export const BattleTable = () => {
    const [players, setPlayers] = useState<BattlePlayer[]>([]);

    useEffect(() => {
        battleClient.findOpponents(setPlayers)
    }, [players])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gold',
            dataIndex: 'gold',
            key: 'gold',
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <Space size="middle">
                    <Tag color={record.status === 'offline' ? 'gray' : 'green'} >
                        {record.status === 'offline' ? 'OFFLINE' : 'ONLINE'}
                    </Tag>
                </Space>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <PulseButton type="primary" shape="circle" danger>
                        <GiCrossedSwords/>
                    </PulseButton>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={players} rowKey="id"/>
    )
}