import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { NavigateAddress } from '@';
import {overLenTextShow} from 'utils';
export const columns = [
    {
        title: '时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '交易哈希',
        dataIndex: 'txnHash',
        key: 'txnHash',
        render: text => (
            <Popover content={text}>
                <Link to={`/transaction/${text}`}>{overLenTextShow(text)}</Link>
            </Popover>),
    },
    {
        title: '发送方',
        dataIndex: 'fromAddress',
        key: 'fromAddress',
        render: text => (
            <Popover content={text}>
                <Link to={`/walletDetail/${text}`}>{overLenTextShow(text)}</Link>
            </Popover>
        ),
    },
    {
        title: '接收方',
        dataIndex: 'toAddress',
        key: 'toAddress',
        render: text => (
            <Popover content={text}>
                <NavigateAddress address={text} />
            </Popover>),
    },
    {
        title: '类型',
        dataIndex: 'methodName',
        key: 'methodName',
    },
    {
        title: 'NFR',
        dataIndex: 'nfrList',
        key: 'nfrList',
        render(nfrIds = [], record) {
            if (nfrIds.length === 1) {
                const nfr = nfrIds[0];
                return <Link to={`/nfrDetail/${nfr.id}/${record.toAddress}`}>{nfr.name}</Link>
            }
            return '--';
        }
    },
    {
        title: 'NFRID',
        dataIndex: 'nfrList',
        key: 'nfrList',
        render(nfrIds = [], record) {
            if (nfrIds.length === 1) {
                const nfr = nfrIds[0];
                return <Link to={`/nfrDetail/${nfr.id}/${record.toAddress}`}>{nfr.id}</Link>
            }
            return '--';
        }
    },
]


export default columns;