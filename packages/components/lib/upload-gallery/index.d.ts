/// <reference types="react" />
import type { UploadFile } from 'antd/es/upload/interface';
import './styles.less';

interface IUploadGallery {
    action: string;
    value?: string;
    onChange?: (value: UploadFile[]) => void;
    multiple?: boolean;
    max?: number;
}
export declare const UploadGallery: ({ action, value, onChange, multiple, max }: IUploadGallery) => JSX.Element;
export {};
