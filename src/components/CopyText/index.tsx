import React, { ReactNode } from 'react';
import { message } from 'antd';
import Icon, { CopyOutlined } from '@ant-design/icons';

function CopyText(props: { children: ReactNode; text: string }) {
    function copy(data: string) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(data);
        } else {
            const textarea = document.createElement('textarea');
            textarea.setAttribute('readonly', 'readonly');
            textarea.value = data;
            document.body.appendChild(textarea);
            textarea.select();
            if (document.execCommand) {
                document.execCommand('copy');
            }
            textarea.style.display = 'none';
        }
        message.success('复制成功');
    }

    return (
        <div>
            <span style={{ marginRight: 8 }}>{props.children}</span>
            <CopyOutlined
                onClick={() => {
                    copy(props.text);
                }}
            />
        </div>
    );
}

export default CopyText;
