import React, { useEffect, useCallback } from 'react';
import { Table, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {isEmptyObj} from 'utils';
import columns from './constants';
import { asyncGetPageList, changTable, getInitState, asyncGetNfrDetail, downTrans } from '../../store/features/walletDetail';
import './index.less';


function WalletDetail() {
    const { type = '' } = useParams();
    const dispatch = useDispatch();
    const { list = [], pageInfo, info = {} } = useSelector((state: any) => state.walletDetail);

    useEffect(() => {
        if (isEmptyObj(info)) {
            dispatch(asyncGetPageList(type));
            dispatch(asyncGetNfrDetail(type));
        }

        return () => {
            dispatch(getInitState());
        }
    }, []);
    const handleDown = useCallback(() => {
        dispatch(downTrans());
    }, []);
    const { nfrCount, nfrUriList } = info.searchData || {};
    const pageChange = useCallback((page, pageSize) => {
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

        </div>
    );
}

WalletDetail.getInitialProps = () => {
    return [asyncGetPageList(), asyncGetNfrDetail()]
}

export default WalletDetail;