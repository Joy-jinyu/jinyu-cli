import React from 'react';
import { message } from 'antd';
import Icon, { CopyOutlined } from '@ant-design/icons';

function CopyText(props) {
    function copy(data) {
        navigator.clipboard.writeText(data);
        message.success('复制成功');
    }

    return (
        <div>
            <span style={{ marginRight: 8 }}>{props.children}</span>
            <CopyOutlined onClick={() => { copy(props.text) }} />
        </div >
    );
}

export default CopyText;