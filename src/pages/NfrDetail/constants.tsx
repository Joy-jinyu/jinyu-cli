import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import overLenTextShow from '~/utils/overLenTextShow';
export const columns = [
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
            </Popover>),
    },
    {
        title: '发送方',
        dataIndex: 'fromAddress',
        render: fromAddress => (
            <Popover content={fromAddress}>
                <Link to={`/walletDetail/${fromAddress}`}>{overLenTextShow(fromAddress)}</Link>
            </Popover>),
    },
    {
        title: '接收方',
        dataIndex: 'toAddress',
        render: toAddress => (
            <Popover content={toAddress}>
                <Link to={`/walletDetail/${toAddress}`}>{overLenTextShow(toAddress)}</Link>
            </Popover>),
    },
    {
        title: '类型',
        dataIndex: 'methodName',
    }
]


export default columns;