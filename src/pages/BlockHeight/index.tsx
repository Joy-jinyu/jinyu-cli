import React, { Dispatch, useEffect } from 'react';
import { Table } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatSeconds, scendsTakenTo } from '@utils';
import { CommonSearch, DownloadCvs } from '@components';
import {
    asyncGetPageList,
    changTable,
    asyncGetDetail,
    getInitState
} from '../../store/features/blockHeight';
import { columns } from './constants';
import { useCallback } from 'react';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';

function BlockHeight() {
    const { type = '' } = useParams();
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    const {
        list = [],
        pageInfo,
        info = {}
    } = useSelector((state: any) => state.blockHeight);
    console.log(list, pageInfo, info);
    const { address = '', searchData = {} } = info;
    useEffect(() => {
        dispatch(asyncGetPageList(type));
        dispatch(asyncGetDetail(type));
        return () => {
            dispatch(getInitState());
        };
    }, [type]);
    const pageChange = useCallback((page: number, pageSize: number) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="block-height">
            <div className="common-search">
                <CommonSearch borderd />
            </div>
            <div className="title-wrap">
                <div className="head-title">
                    <span className="address">{`# ${address}`}</span>
                    <ClockCircleOutlined style={{ marginRight: 12 }} />
                    <span>{`${formatSeconds(
                        scendsTakenTo(new Date(searchData.createTime).getTime())
                    )} ago(${searchData.createTime})`}</span>
                </div>
                <p>{searchData.hash}</p>
            </div>
            <div className="table-title">
                <h3 className="title">该高度下交易</h3>
                <DownloadCvs paramKey="blockHeight" paramValue={info.address} />
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

BlockHeight.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetDetail()];
};

export default BlockHeight;
