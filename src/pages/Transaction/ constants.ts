export const CREATE = 'create';
export const MINT = 'mint';
export const MINT_BATCH = 'mintBatch';
export const TRANSFER = 'transfer';
export const TRANSFER_BATCH = 'transferBatch';
export const BURN = 'burn';
export const BURN_BATCH = 'burnBatch';


export const transactionEnum = {
    [CREATE]: {
        title: '创建'
    },
    [MINT]: {
        // 单向
        title: '铸造',
    },
    [MINT_BATCH]: {
        // 单向
        title: '批量铸造',
    },
    [TRANSFER]: {
        title: '转账',
        label: '发送至'
    },
    [TRANSFER_BATCH]: {
        title: '批量发送',
        label: '发送至'
    },
    [BURN]: {
        title: '销毁',
        label: '销毁合约'
    },
    [BURN_BATCH]: {
        title: '批量销毁',
        label: '销毁合约'
    }
};

export default '';