import React from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { overLenTextShow } from 'utils';
export const columns = [
    {
        title: '时间',
        dataIndex: 'createTime'
    },
    {
        title: '交易哈希',
        dataIndex: 'txnHash',
        render: (txnHash: string) => (
            <Popover content={txnHash}>
                <Link to={`/transaction/${txnHash}`}>
                    {overLenTextShow(txnHash)}
                </Link>
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
                <Link to={`/walletDetail/${toAddress}`}>
                    {overLenTextShow(toAddress)}
                </Link>
            </Popover>
        )
    },
    {
        title: '类型',
        dataIndex: 'methodName'
    },
    {
        title: 'NFR',
        dataIndex: 'nfrList',
        render(
            nfrList: Array<{ id: number; name: string }> = [],
            record: { toAddress: string }
        ) {
            if (nfrList.length === 1) {
                const nfr = nfrList[0];
                return (
                    <Link to={`/nfrDetail/${nfr.id}/${record.toAddress}`}>
                        {nfr.name}
                    </Link>
                );
            }
            return '--';
        }
    },
    {
        title: 'NFRID',
        dataIndex: 'nfrList',
        render(
            nfrList: Array<{ id: number }> = [],
            record: { toAddress: string }
        ) {
            if (nfrList.length === 1) {
                const nfr = nfrList[0];
                return (
                    <Link to={`/nfrDetail/${nfr.id}/${record.toAddress}`}>
                        {nfr.id}
                    </Link>
                );
            }
            return '--';
        }
    }
];

export default columns;
