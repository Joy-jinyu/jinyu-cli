import React, { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { Line } from '@ant-design/plots';
import './index.less';

const GUTTER = 16;
const SPAN = 6;
interface IProps {
    detail: {
        [name: string]: any;
    };
}
function Overview(props: IProps) {
    const { detail = {} } = props;
    const { recentTransactionsMap } = detail;
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(recentTransactionsMap);
    }, [(recentTransactionsMap || []).length]);
    const config = {
        data,
        xField: 'date',
        yField: 'count',
        height: 116,
        xAxis: {
            tickCount: 5
        }
    };
    return (
        <div className="overview">
            <h2>总览</h2>
            <Row gutter={GUTTER}>
                <Col span={16} className="left-info">
                    <Row gutter={GUTTER}>
                        <Col span={SPAN}>
                            <p className="title">交易比数</p>
                            <p className="introduc-content">
                                {detail.txnCount}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">区块高度</p>
                            <p className="introduc-content">
                                {detail.blockHeight}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">平均每秒交易</p>
                            <p className="introduc-content">
                                {detail.avgTxnCount}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">钱包地址总量</p>
                            <p className="introduc-content">
                                {detail.addressCount}
                            </p>
                        </Col>
                    </Row>
                    <Row gutter={GUTTER}>
                        <Col span={SPAN}>
                            <p className="title">最近24H交易比数</p>
                            <p className="introduc-content">
                                {detail.recentTxnCount}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">近24H出块量</p>
                            <p className="introduc-content">
                                {detail.recentBlockCount}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">平均出块时间</p>
                            <p className="introduc-content">
                                {detail.avgBlockTime}
                            </p>
                        </Col>
                        <Col span={SPAN}>
                            <p className="title">智能合约量</p>
                            <p className="introduc-content">
                                {detail.contractCount}
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Line {...config} />
                </Col>
            </Row>
        </div>
    );
}

export default Overview;
