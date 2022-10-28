import React from 'react';
import { overLenTextShow } from 'utils';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { NavigateAddress } from '@';
export const BLOCK_TYPE = 'recentBlock';
export const TRANS_TYPE = 'recentTrans';

export const PAGE_CONFIG = {
    [BLOCK_TYPE]: {
        title: '最近出块',
        tableColumns: [
            {
                title: '区块高度',
                dataIndex: 'blockHeight',
                render: (text: string) => {
                    return <Link to={`/blockHeight/${text}`}>{text}</Link>;
                }
            },
            {
                title: '时间',
                dataIndex: 'createTime'
            },
            {
                title: '出块节点',
                dataIndex: 'miner',
                render: (text: string) => (
                    <Popover content={text}>{overLenTextShow(text)}</Popover>
                )
            },
            {
                title: '交易比数',
                dataIndex: 'transactionsList',
                render: (transactionsList: []) =>
                    (transactionsList || []).length
            }
        ]
    },
    [TRANS_TYPE]: {
        title: '最近交易',
        tableColumns: [
            {
                title: '区块高度',
                dataIndex: 'blockHeight',
                render: (text: string) => {
                    return <Link to={`/blockHeight/${text}`}>{text}</Link>;
                }
            },
            {
                title: '时间',
                dataIndex: 'createTime'
            },
            {
                title: '交易哈希',
                dataIndex: 'txnHash',
                render: (text: string) => (
                    <Popover content={text}>
                        <Link to={`/transaction/${text}`}>
                            {overLenTextShow(text)}
                        </Link>
                    </Popover>
                )
            },
            {
                title: '发送方',
                dataIndex: 'fromAddress',
                render: (text: string) => (
                    <Popover content={text}>
                        <Link to={`/walletDetail/${text}`}>
                            {overLenTextShow(text)}
                        </Link>
                    </Popover>
                )
            },
            {
                title: '接收方',
                dataIndex: 'toAddress',
                render: (text: string) => (
                    <Popover content={text}>
                        <NavigateAddress address={text} />
                    </Popover>
                )
            },
            {
                title: '类型',
                dataIndex: 'methodName'
            },
            {
                title: 'NFRID',
                dataIndex: 'nfrList',
                render(
                    nfrList: Array<{ id: number; name: string }> = [],
                    record: {
                        contractAddress: string;
                        blockHeight: string;
                        txnHash: string;
                    }
                ) {
                    if (nfrList.length === 1) {
                        const nfr = nfrList[0];
                        return (
                            <Link
                                to={`/nfrDetail/${nfr.id}/${record.contractAddress}`}
                            >
                                {nfr.id}
                            </Link>
                        );
                    }
                    return '--';
                }
            }
        ]
    }
};

export default {
    BLOCK_TYPE,
    TRANS_TYPE
};
