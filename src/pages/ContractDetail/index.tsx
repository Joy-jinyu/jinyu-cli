import React, { useEffect, useCallback } from 'react';
import { Table, Row, Col, Button } from 'antd';
import { useParams, Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import isEmptyObj from '~/utils/isEmptyObj';
import columns from './constants';
import { asyncGetPageList, changTable, asyncGetNfrDetail, getInitState, downTrans } from '../../store/features/contractDetail';
import './index.less';


function ContractDetail() {
    const { type = '' } = useParams();
    const dispatch = useDispatch();
    const { list = [], pageInfo, detail = {}, info = {} } = useSelector((state: any) => state.contractDetail);
    const { tokenCount, walletCount, transactionCount } = info.searchData || {};
    useEffect(() => {
        if (isEmptyObj(info)) {
            dispatch(asyncGetPageList(type));
            dispatch(asyncGetNfrDetail(type));
        }
        return () => {
            dispatch(getInitState());
        }
    }, [])
    const handleDown = useCallback(() => {
        dispatch(downTrans());
    }, []);
    const pageChange = useCallback((page, pageSize) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="contract-detail">
            <div className="contract-title">
                <h3 className="title">{detail.name}</h3>
                <Link to="">{`合约：${info.address}`}</Link>
            </div>
            <div className='detail-info'>
                <Row gutter={24}>
                    <Col className="label" span={2}>总量</Col>
                    <Col span={22}>{tokenCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}><span>持有钱包</span></Col>
                    <Col>{walletCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}><span>交易笔数</span></Col>
                    <Col>{transactionCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}><span>合约</span></Col>
                    <Col><Link to="">{info.address}</Link></Col>
                </Row>
            </div>
            <div className="table-title">
                <h3 className="title">交易记录</h3>
                <Button type="link" block onClick={handleDown}>
                    导出为CSV
                    <DownloadOutlined className="title-icon" />
                </Button>
            </div>
            <Table
                dataSource={list}
                pagination={{
                    total: pageInfo.totalElements,
                    current: pageInfo.pageStart,
                    pageSize: pageInfo.pageSize,
                    onChange: pageChange
                }}
                columns={columns}
            />
        </div>
    );
}

ContractDetail.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetNfrDetail()]
}

export default ContractDetail;