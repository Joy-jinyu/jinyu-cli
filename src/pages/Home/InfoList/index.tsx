import React, { useCallback } from 'react';
import { List, Popover } from 'antd';
import { Link } from 'react-router-dom';
import { NavigateAddress } from '@components';
import { overLenTextShow } from '@utils';
import './index.less';

interface IProp {
    lastBlock: Array<{
        hash: string;
        blockHeight: string;
        scendsTakenTo: string;
        transactionsList: Array<unknown>;
    }>;
    lastTransactions: Array<{
        txnHash: string;
        scendsTakenTo: string;
        fromAddress: string;
        toAddress: string;
    }>;
}

function InfoList(props: IProp) {
    const { lastBlock = [], lastTransactions = [] } = props;
    const BLOCK_TYPE = 'recentBlock';
    const TRANS_TYPE = 'recentTrans';

    const overLenText = useCallback(overLenTextShow, []);

    return (
        <div className="info-list">
            <List
                className="list"
                bordered
                header={
                    <div className="list-head">
                        <span>最新出块</span>
                        <Link to={`recentInfo/${BLOCK_TYPE}`}>更多</Link>
                    </div>
                }
                dataSource={lastBlock}
                renderItem={item => (
                    <List.Item key={item.hash}>
                        <List.Item.Meta
                            title={
                                <Popover content={item.blockHeight}>
                                    <Link
                                        to={`/blockHeight/${item.blockHeight}`}
                                    >{`# ${overLenText(
                                        item.blockHeight
                                    )}`}</Link>
                                </Popover>
                            }
                            description={`${item.scendsTakenTo} scends ago`}
                        />
                        <span>{`${item?.transactionsList?.length} 比交易`}</span>
                    </List.Item>
                )}
            />
            <List
                className="list"
                bordered
                header={
                    <div className="list-head">
                        <span>最新交易</span>
                        <Link to={`recentInfo/${TRANS_TYPE}`}>更多</Link>
                    </div>
                }
                dataSource={lastTransactions}
                renderItem={item => (
                    <List.Item key={item.txnHash}>
                        <List.Item.Meta
                            title={
                                <Popover content={item.txnHash}>
                                    <Link
                                        to={`/transaction/${item.txnHash}`}
                                    >{`# ${overLenText(item.txnHash)}`}</Link>
                                </Popover>
                            }
                            description={`${item.scendsTakenTo} scends ago`}
                        />
                        <div className="briefly-wrap">
                            <div className="briefly">
                                <span>From</span>
                                <Popover content={item.fromAddress}>
                                    <Link
                                        to={`/walletDetail/${item.fromAddress}`}
                                    >{`${overLenText(item.fromAddress)}`}</Link>
                                </Popover>
                            </div>
                            <div className="briefly">
                                <span>To</span>
                                <Popover content={item.toAddress}>
                                    <NavigateAddress address={item.toAddress} />
                                </Popover>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default InfoList;
