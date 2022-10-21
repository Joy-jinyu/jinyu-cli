import React, { useCallback } from 'react';
import { Button } from 'antd';
import useSearchNavigate from '~/hooks/useSearchNavigate';
import overLenTextShow from '~/utils/overLenTextShow';

function NavigateAddress(props) {
    const { address } = props;
    const jumpToAddress = useSearchNavigate();
    const handleBtn = useCallback(() => {
        jumpToAddress(address)
    }, [address]);
    return <Button style={{ paddingLeft: 0 }} {...props} type='link' onClick={handleBtn}>{overLenTextShow(address)}</Button>
}

export default NavigateAddress;