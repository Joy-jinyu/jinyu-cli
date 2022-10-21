import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import overLenTextShow from '~/utils/overLenTextShow';
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
        render: fromAddress => (
            <Popover content={fromAddress}>
                <Link to={`/walletDetail/${fromAddress}`}>{overLenTextShow(fromAddress)}</Link>
            </Popover>),
    },
    {
        title: '接收方',
        dataIndex: 'toAddress',
        key: 'toAddress',
        render: toAddress => (
            <Popover content={toAddress}>
                <Link to={`/walletDetail/${toAddress}`}>{overLenTextShow(toAddress)}</Link>
            </Popover>),
    },
    {
        title: '类型',
        key: 'methodName',
        dataIndex: 'methodName',
    }
]


export default columns;