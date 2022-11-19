import React, { Dispatch, useEffect } from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    asyncGetPageList,
    changTable,
    getInitState
} from '../../store/features/recentInfo';
import { BLOCK_TYPE, PAGE_CONFIG } from './constants';
import { CommonSearch } from '@components';
import { useCallback } from 'react';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';
type IType = 'recentBlock' | 'recentTrans';
function RecentInfo() {
    const { type = BLOCK_TYPE } = useParams();
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    const { list = [], pageInfo } = useSelector(
        (state: any) => state.recentInfo
    );
    console.log(list);
    useEffect(() => {
        if (!list.length) {
            dispatch(asyncGetPageList(type));
        }

        return () => {
            dispatch(getInitState());
        };
    }, []);

    const pageChange = useCallback((page: number, pageSize: number) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="recent-info">
            <div className="common-search">
                <CommonSearch borderd />
            </div>
            <h3 className="title">{PAGE_CONFIG[type as IType].title}</h3>
            <Table
                columns={PAGE_CONFIG[type as IType].tableColumns}
                dataSource={list}
                pagination={{
                    total: pageInfo.totalElements,
                    current: pageInfo.pageStart,
                    pageSize: pageInfo.pageSize,
                    onChange: pageChange
                }}
                rowKey={({ txnHash, blockHeight }) => txnHash || blockHeight}
            />
        </div>
    );
}

RecentInfo.getInitialProps = () => {
    return [asyncGetPageList()];
};

export default RecentInfo;
