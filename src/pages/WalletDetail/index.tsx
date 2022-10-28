import React, { useEffect, useCallback, Dispatch } from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isEmptyObj } from 'utils';
import columns from './constants';
import { DownloadCvs } from '@';
import {
    asyncGetPageList,
    changTable,
    getInitState,
    asyncGetNfrDetail
} from '../../store/features/walletDetail';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';

function WalletDetail() {
    const { type = '' } = useParams();
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    const {
        list = [],
        pageInfo,
        info = {}
    } = useSelector((state: any) => state.walletDetail);

    useEffect(() => {
        if (isEmptyObj(info)) {
            dispatch(asyncGetPageList(type));
            dispatch(asyncGetNfrDetail(type));
        }

        return () => {
            dispatch(getInitState());
        };
    }, [type]);
    const { nfrCount } = info.searchData || {};
    const pageChange = useCallback((page: number, pageSize: number) => {
        dispatch(changTable(page, pageSize, type));
    }, []);
    return (
        <div className="wallet-detail">
            <h3 className="title">钱包地址</h3>
            <p className="address">{info.address}</p>
            <div className="detail-info">
                <h3 className="title">用户总览</h3>
                <p>共持有NFR： {nfrCount}</p>

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
        </div>
    );
}

WalletDetail.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetNfrDetail()];
};

export default WalletDetail;
