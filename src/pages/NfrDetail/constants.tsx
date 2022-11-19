import React from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import { NavigateAddress } from '@components';
import { overLenTextShow } from '@utils';
export const columns = [
    {
        title: '时间',
        dataIndex: 'createTime'
    },
    {
        title: '交易哈希',
        dataIndex: 'txnHash',
        render: (text: string) => (
            <Popover content={text}>
                <Link to={`/transaction/${text}`}>{overLenTextShow(text)}</Link>
            </Popover>
        )
    },
    {
        title: '发送方',
        dataIndex: 'fromAddress',
        render: (fromAddress: string) => (
            <Popover content={fromAddress}>
                <Link to={`/walletDetail/${fromAddress}`}>
                    {overLenTextShow(fromAddress)}
                </Link>
            </Popover>
        )
    },
    {
        title: '接收方',
        dataIndex: 'toAddress',
        render: (toAddress: string) => (
            <Popover content={toAddress}>
                <NavigateAddress address={toAddress} />
            </Popover>
        )
    },
    {
        title: '类型',
        dataIndex: 'methodName'
    }
];

export default columns;
