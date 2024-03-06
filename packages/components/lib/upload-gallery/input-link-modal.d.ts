/// <reference types="react" />
interface IInputLinkModal {
    visible: boolean;
    onClose: () => void;
    onSave: (link: string) => void;
}
export declare const InputLinkModal: ({ visible, onClose, onSave }: IInputLinkModal) => JSX.Element;
export {};
