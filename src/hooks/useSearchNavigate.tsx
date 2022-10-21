import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import request from 'request';

function useSearchNavigate() {
    const navigate = useNavigate();
    const jumpToAddress = useCallback((address) => {
        request.post({ url: '/dashboard/search', query: { address } })
            .then(res => {
                const { code, address, message = '' } = res?.data || {};
                switch (code) {
                    case 0:
                        navigate(`/walletDetail/${address}`);
                        break;
                    case 1:
                        navigate(`/contractDetail/${address}`);
                        break;
                    case 2:
                        navigate(`/transaction/${address}`);
                        break;
                    case 3:
                        navigate(`/blockHeight/${address}`);
                        break;
                    default:
                        return ''
                }
            }).catch((e) => {
            })
    }, []);

    return jumpToAddress;
}

export default useSearchNavigate;