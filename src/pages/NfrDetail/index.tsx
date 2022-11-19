import React, { useEffect, useCallback, Dispatch } from 'react';
import { Table, Row, Col } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { DownloadCvs } from '@components';
import { useSelector, useDispatch } from 'react-redux';
import columns from './constants';
import { isEmptyObj } from '@utils';
import {
    asyncGetPageList,
    changTable,
    getInitState,
    asyncGetNfrDetail
} from '../../store/features/nfrDetail';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';

function NfrDetail() {
    const { type = '', address = '' } = useParams();
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    const {
        list = [],
        pageInfo,
        detail = {}
    } = useSelector((state: any) => state.nfrDetail);
    console.log(detail, list);
    useEffect(() => {
        if (isEmptyObj(detail)) {
            dispatch(asyncGetPageList(type, address));
            dispatch(asyncGetNfrDetail(type, address));
        }

        return () => {
            dispatch(getInitState());
        };
    }, []);
    // const handleDown = useCallback(() => {
    //     dispatch(downTrans());
    // }, []);
    const pageChange = useCallback((page: number, pageSize: number) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="nfr-detail">
            <h3 className="title">NFR详情</h3>
            <div className="detail-header">
                <span className="name">{detail.name}</span>
                <Link to="">{detail.contractAddress}</Link>
                <span className="contrat">{`# ${detail.nfrId}`}</span>
            </div>
            <div className="detail-info">
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>NFR集合</span>
                    </Col>
                    <Col span={22}>
                        <Link to={`/contractDetail/${detail.contractAddress}`}>
                            {detail.contractAddress}
                        </Link>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>NFRID</span>
                    </Col>
                    <Col>
                        <Link to="">{detail.nfrId}</Link>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>Nfr数量</span>
                    </Col>
                    <Col>{detail.amount}</Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>持有人数量</span>
                    </Col>
                    <Col>{detail.ownerCount}</Col>
                </Row>

                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>生成者</span>
                    </Col>
                    <Col>
                        <Link to={`/walletDetail/${detail.creatorAddress}`}>
                            {detail.creatorAddress}
                        </Link>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col className="label" span={2}>
                        <span>类型</span>
                    </Col>
                    <Col>{detail.nfrProtocol}</Col>
                </Row>
            </div>
            <div className="table-title">
                <h3 className="title">交易记录</h3>
                <DownloadCvs paramKey="nfrIds" paramValue={detail.nfrId} />
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
                rowKey={record => record.txnHash}
            />
        </div>
    );
}

NfrDetail.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetNfrDetail()];
};

export default NfrDetail;
