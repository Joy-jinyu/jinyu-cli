import React, { Dispatch, useEffect } from 'react';
import { Image, Button } from 'antd';
import Overview from './Overview';
import InfoList from './InfoList';
import { useSelector, useDispatch } from 'react-redux';
import { CommonSearch } from '@components';
import { isEmptyObj } from '@utils';
import {
    asyncGetCountDetail,
    getInitState,
    asyncGetLastBlock,
    asyncGetLastTransactions
} from '../../store/features/home';
import './index.less';
import { AnyAction } from '@reduxjs/toolkit';

function Home() {
    const { countDetail, lastBlock, lastTransactions } = useSelector(
        (state: any) => state.home
    );
    const dispatch: Dispatch<AnyAction | any> = useDispatch();
    useEffect(() => {
        if (isEmptyObj(countDetail)) {
            dispatch(asyncGetCountDetail());
            dispatch(asyncGetLastBlock());
            dispatch(asyncGetLastTransactions());
        }

        return () => {
            dispatch(getInitState());
        };
    }, []);
    return (
        <div>
            <div className="search-content">
                <div className="search-content-left">
                    <div className="title">
                        <Image
                            width={50}
                            height={50}
                            preview={false}
                            src="cc.jpeg"
                        />
                        <span className="title-text">
                            Free Blockchain Explorer
                        </span>
                    </div>
                    <div className="search-wrap">
                        <CommonSearch />
                    </div>
                </div>
                <div className="search-content-right">
                    <p>免费发型数字藏品</p>
                    <p>
                        可免费使用福瑞链,由国内领先、自主研发的福瑞链作为底层区块链技术支撑，在保证安全和性能的同时，能满足各类复杂的业务场景。在0成本的创作和交易中体验NFR生态。
                    </p>
                    <Button ghost className="experience-btn" type="primary">
                        立即体验
                    </Button>
                </div>
            </div>
            <Overview detail={countDetail} />
            <InfoList
                lastBlock={lastBlock}
                lastTransactions={lastTransactions}
            />
        </div>
    );
}

Home.getInitialProps = () => {
    return [
        asyncGetCountDetail(),
        asyncGetLastBlock(),
        asyncGetLastTransactions()
    ];
};

export default Home;
