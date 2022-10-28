import React, { useCallback } from 'react';
import { Button } from 'antd';
import useSearchNavigate from '~/hooks/useSearchNavigate';
import { overLenTextShow } from 'utils';
interface IProps {
    address: string;
    isWrapText?: boolean;
}

function NavigateAddress(props: IProps) {
    const { address, isWrapText = true } = props;
    const jumpToAddress = useSearchNavigate();
    const handleBtn = useCallback(() => {
        jumpToAddress(address);
    }, [address]);
    return (
        <Button
            style={{ paddingLeft: 0 }}
            {...props}
            type="link"
            onClick={handleBtn}
        >
            {isWrapText ? overLenTextShow(address) : address}
        </Button>
    );
}

export default NavigateAddress;
