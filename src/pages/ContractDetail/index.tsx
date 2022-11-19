import React, { useEffect, useCallback, Dispatch } from 'react';
import { Table, Row, Col } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DownloadCvs } from '@components';
import { isEmptyObj } from '@utils';
import columns from './constants';
import {
    asyncGetPageList,
    changTable,
    asyncGetContractDetail,
    getInitState
} from '../../store/features/contractDetail';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';

function ContractDetail() {
    const { type = '' } = useParams();
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    const {
        list = [],
        pageInfo,
        info = {}
    } = useSelector((state: any) => state.contractDetail);
    const { tokenCount, walletCount, transactionCount } = info.searchData || {};
    useEffect(() => {
        if (isEmptyObj(info)) {
            dispatch(asyncGetPageList(type));
            dispatch(asyncGetContractDetail(type));
        }
        return () => {
            dispatch(getInitState());
        };
    }, []);
    const pageChange = useCallback((page: number, pageSize: number) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="contract-detail">
            <div className="contract-title">
                <Link to="">{`合约：${info.address}`}</Link>
            </div>
            <div className="detail-info">
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        总量
                    </Col>
                    <Col span={22}>{tokenCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>持有钱包</span>
                    </Col>
                    <Col>{walletCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>交易笔数</span>
                    </Col>
                    <Col>{transactionCount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>合约</span>
                    </Col>
                    <Col>
                        <Link to="">{info.address}</Link>
                    </Col>
                </Row>
            </div>
            <div className="table-title">
                <h3 className="title">交易记录</h3>
                <DownloadCvs paramKey="address" paramValue={info.address} />
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
    return [asyncGetPageList(), asyncGetContractDetail()];
};

export default ContractDetail;
