import { createSlice } from '@reduxjs/toolkit';
import request from 'request';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        countDetail: {},
        lastBlock: [],
        lastTransactions: []
    },
    reducers: {
        getCountDetail(state, { payload = {} }) {
            state.countDetail = payload
        },
        getLastBlock(state, { payload = {} }) {
            const { responseList = [] } = payload;
            state.lastBlock = responseList
        },
        getLastTransactions(state, { payload = {} }) {
            const { responseList = [] } = payload;
            state.lastTransactions = responseList
        },
        getInitState(state) {
            Object.assign(state, {
                countDetail: {},
                lastBlock: [],
                lastTransactions: []
            });
        }
    },
});

export const { getInitState, getCountDetail, getLastBlock, getLastTransactions } = homeSlice.actions;

// 获取页面总览数据
export const asyncGetCountDetail = () => (dispatch: any) => {
    return request.get({ url: '/dashboard/countDetail' })
        .then(res => {
            return dispatch(getCountDetail(res?.data));
        }).catch((e) => {
            console.log(e);
        })
}
// 获取最近出块
export const asyncGetLastBlock = () => (dispatch: any) => {
    return request.get({ url: '/block/getLastBlock' })
        .then(res => {
            return dispatch(getLastBlock(res?.data));
        }).catch((e) => {
            console.log(e);
        })
}
// 获取最近交易
export const asyncGetLastTransactions = () => (dispatch: any) => {
    return request.get({ url: '/transactions/getLastTransactions' })
        .then(res => {
            return dispatch(getLastTransactions(res?.data));
        }).catch((e) => {
            console.log(e);
        })
}

export default homeSlice.reducer;