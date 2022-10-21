import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { ClockCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import isEmptyObj from '~/utils/isEmptyObj';
import { CommonSearch } from '@';
import { asyncGetPageList, changTable, asyncGetDetail, getInitState, downTrans } from '../../store/features/blockHeight';
import { columns } from './constants';
import { useCallback } from 'react';
import './index.less'

function BlockHeight() {
    const { type = '' } = useParams();
    const dispatch = useDispatch();
    const { list = [], pageInfo, info = {} } = useSelector((state: any) => state.blockHeight);
    console.log(list, pageInfo, info);
    const { address = '', searchData = {} } = info;
    useEffect(() => {
        if (isEmptyObj(info)) {
            dispatch(asyncGetPageList(type));
            dispatch(asyncGetDetail(type));
        }
        return () => {
            dispatch(getInitState());
        }
    }, []);
    const handleDown = useCallback(() => {
        dispatch(downTrans());
    }, []);
    const pageChange = useCallback((page, pageSize) => {
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
                    <ClockCircleOutlined />
                    <span className="time">{searchData.createTime}</span>
                </div>
                <p>{searchData.hash}</p>
            </div>
            <div className="table-title">
                <h3 className="title">该高度下交易</h3>
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
                rowKey={record => record.txnHash}
            />
        </div>
    );
}

BlockHeight.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetDetail()]
}

export default BlockHeight;