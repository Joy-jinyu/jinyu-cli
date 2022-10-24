
import {overLenTextShow} from 'utils';
import { Link } from 'react-router-dom'
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
                render: (text) => {
                    return (<Link to={`/blockHeight/${text}`}>{text}</Link>)
                }
            },
            {
                title: '时间',
                dataIndex: 'createTime',
            },
            {
                title: '出块节点',
                dataIndex: 'miner',
                render: text => (
                    <Popover content={text}>
                        <Link to={`/walletDetail/${text}`}>{overLenTextShow(text)}</Link>
                    </Popover>),
            },
            {
                title: '交易比数',
                dataIndex: 'transactions',
                render: transactions => (transactions || []).length,
            },
        ],
    },
    [TRANS_TYPE]: {
        title: '最近交易',
        tableColumns: [
            {
                title: '区块高度',
                dataIndex: 'blockHeight',
                render: (text) => {
                    return (<Link to={`/blockHeight/${text}`}>{text}</Link>)
                }
            },
            {
                title: '时间',
                dataIndex: 'createTime',
            },
            {
                title: '交易哈希',
                dataIndex: 'txnHash',
                render: text => (
                    <Popover content={text}>
                        <Link to={`/transaction/${text}`}>{overLenTextShow(text)}</Link>
                    </Popover>)
            },
            {
                title: '发送方',
                dataIndex: 'fromAddress',
                render: text => (
                    <Popover content={text}>
                        <Link to={`/walletDetail/${text}`}>{overLenTextShow(text)}</Link>
                    </Popover>),
            },
            {
                title: '接收方',
                dataIndex: 'toAddress',
                render: text => (
                    <Popover content={text}>
                        <NavigateAddress address={text} />
                    </Popover>),
            },
            {
                title: '类型',
                dataIndex: 'methodName',
            },
            {
                title: 'NFR',
                dataIndex: 'nfrList',
                render(nfrList = []) {
                    if (nfrList.length === 1) {
                        const nfr = nfrList[0];
                        return <Link to={`/nfrDetail/${nfr.id}`}>{nfr.name}</Link>
                    }
                    return '--';
                }
            },
            {
                title: 'NFRID',
                dataIndex: 'nfrList',
                render(nfrList = []) {
                    if (nfrList.length === 1) {
                        const nfr = nfrList[0];
                        return <Link to={`/nfrDetail/${nfr.id}`}>{nfr.id}</Link>
                    }
                    return '--';
                }
            },
        ],
    },
};

export default {
    BLOCK_TYPE,
    TRANS_TYPE
};