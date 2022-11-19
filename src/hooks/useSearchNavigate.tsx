import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import request from 'request';

function useSearchNavigate() {
    const navigate = useNavigate();
    const jumpToAddress = useCallback((address: string) => {
        request
            .post('/dashboard/search', {}, { params: { address } })
            .then((res: any) => {
                const { code, address } = res['data'] || {};
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
                        return '';
                }
            })
            .catch(e => {
                console.log(e, 'err 1');
            });
    }, []);

    return jumpToAddress;
}

export default useSearchNavigate;
