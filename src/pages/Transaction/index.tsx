import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import isEmptyObj from '~/utils/isEmptyObj';
import { asyncGetDetail, getInitState } from '../../store/features/transaction';
import TransResult from './TransResult';
import { CopyText } from '@';
import './index.less';
const GUTTER = 24;
const LABEL_SPAN = 2;
const CONTENT_SPAN = 22;

function Transaction() {
    const { type = '' } = useParams();
    const dispatch = useDispatch();
    const { detail = {} } = useSelector((state: any) => state.transaction);
    useEffect(() => {
        if (isEmptyObj(detail)) {
            dispatch(asyncGetDetail(type))
        }
        return () => {
            dispatch(getInitState());
        }
    }, []);
    return (
        <div className="transaction-detail">
            <div className='title-wrap'>
                <h3>交易哈希</h3>
                <span>{detail.txnHash}</span>
            </div>
            <div className="detail-wrap">
                <h3 className="title">交易详情</h3>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>发送方</Col>
                    <Col span={CONTENT_SPAN}>
                        <CopyText text={`${detail.fromAddress}`}>
                            <Link to={`/walletDetail/${detail.fromAddress}`}>{detail.fromAddress}</Link>
                        </CopyText>
                    </Col>
                </Row>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>接收/交互方</Col>
                    <Col span={CONTENT_SPAN}>
                        <CopyText text={`${detail.toAddress}`}>
                            <Link to={`/contractDetail/${detail.toAddress}`}>{detail.toAddress}</Link>
                        </CopyText>
                    </Col>
                </Row>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>区块高度</Col>
                    <Col span={CONTENT_SPAN}>
                        <Link to={`/blockHeight/${detail.blockHeight}`}>
                            {`# ${detail.blockHeight}`}
                        </Link>
                    </Col>
                </Row>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>交易结果</Col>
                    <Col span={CONTENT_SPAN}>
                        <TransResult
                            toAddress={detail.toAddress}
                            method={detail.method}
                            nfrList={detail?.nfrList}
                        />
                    </Col>
                </Row>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>类型</Col>
                    <Col span={CONTENT_SPAN}>{detail.type}</Col>
                </Row>
                <Row gutter={GUTTER}>
                    <Col className="label" span={LABEL_SPAN}>交易手续费</Col>
                    <Col span={CONTENT_SPAN}>{detail.transFee}</Col>
                </Row>
            </div>
        </div>
    );
}

Transaction.getInitialProps = () => {
    return [asyncGetDetail()]
}

export default Transaction;