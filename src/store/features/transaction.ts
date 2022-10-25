import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import request from 'request';
export const BLOCK_TYPE = 'recentBlock';
export const TRANS_TYPE = 'recentTrans';

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        detail: {}
    },
    reducers: {
        updateDetail(state, { payload }) {
            state.detail = payload;
        },
        getInitState(state) {
            Object.assign(state, {
                detail: {}
            });
        }
    }
});

export const { updateDetail, getInitState } = transactionSlice.actions;
// 获取页面总览数据
export const asyncGetDetail =
    (id = '') =>
    (
        dispatch: Dispatch<AnyAction | any>,
        getState: () => { main: any; transaction: any }
    ) => {
        const { main } = getState();
        const txnHash = id ? id : main.routeParam.type;
        return request
            .post({ url: '/transactions/queryInfo', query: { txnHash } })
            .then((res: any) => {
                return dispatch(updateDetail(res?.data || {}));
            })
            .catch(e => {
                console.log(e);
            });
    };

export default transactionSlice.reducer;
