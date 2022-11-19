import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from 'antd';
import useSearchNavigate from '@/hooks/useSearchNavigate';
import './index.less';
const Search = Input.Search;

function CommonSearch() {
    const jumpToAddress = useSearchNavigate();
    const { type = '' } = useParams();

    const onSearch = useCallback(
        (address: string) => {
            if (type === address) {
                return;
            }
            jumpToAddress(address);
        },
        [type]
    );
    return (
        <Search
            className="common-search-btn"
            placeholder="搜索钱包地址/转账哈希/合约/区块高度"
            // bordered={borderd}
            onSearch={onSearch}
        />
    );
}

export default CommonSearch;
