import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownOutlined, SwapRightOutlined } from '@ant-design/icons';
import { NavigateAddress } from '@components';
import { transactionEnum, MINT, MINT_BATCH, CREATE } from './ constants';
import { Button, Popover } from 'antd';
const MAX_SHOW = 5;
interface IProps {
    toAddress: string;
    method: string;
    nfrList: any[];
    contractAddress: string;
}
function TransResult(props: IProps) {
    const {
        toAddress = '',
        method = '',
        nfrList = [],
        contractAddress = ''
    } = props;
    const [showAll, setShowAll] = useState(nfrList <= MAX_SHOW);
    console.log(toAddress, method, nfrList);
    function toggleShow() {
        setShowAll(!showAll);
    }
    return (
        <div>
            <NavigateAddress address={toAddress} isWrapText={false} />
            {method !== CREATE ? (
                <>
                    <div className="direct-title">
                        <ArrowDownOutlined />
                        <span>{`${
                            transactionEnum[method]?.title
                        } ${nfrList.reduce(
                            (total, cur) => total + Number(cur.amount),
                            0
                        )}个NFT`}</span>
                    </div>
                    <div>
                        {nfrList.map((item, index) => {
                            if (!showAll && index > MAX_SHOW - 1) {
                                return null;
                            }

                            return (
                                <div
                                    className="flow-wrap"
                                    key={item.id + Math.random()}
                                >
                                    <Link
                                        to={`/nfrDetail/${item.id}/${contractAddress}`}
                                    >{`[${item.name || item.id}]`}</Link>
                                    <span>{` x ${item.amount}`}</span>
                                    {method !== MINT &&
                                    method !== MINT_BATCH ? (
                                        <>
                                            <SwapRightOutlined className="direct-icon" />
                                            <span>
                                                {transactionEnum[method].label}
                                            </span>
                                            <Popover content={item.to}>
                                                <NavigateAddress
                                                    address={item.to}
                                                />
                                            </Popover>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            );
                        })}
                        {nfrList.length > MAX_SHOW ? (
                            <div>
                                <span>{`...等${
                                    nfrList.length - MAX_SHOW
                                }个`}</span>
                                <Button type="link" onClick={toggleShow}>
                                    {showAll ? '收起' : '展开'}
                                </Button>
                            </div>
                        ) : null}
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default TransResult;
