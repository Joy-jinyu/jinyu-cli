import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { scendsTakenTo } from '@utils';
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
            state.countDetail = payload;
        },
        getLastBlock(state, { payload = {} }) {
            const { responseList = [] } = payload;
            state.lastBlock = responseList.map((item: any) => ({
                ...item,
                scendsTakenTo: scendsTakenTo(
                    new Date(item.createTime).getTime()
                )
            }));
        },
        getLastTransactions(state, { payload = {} }) {
            const { responseList = [] } = payload;
            state.lastTransactions = responseList.map((item: any) => ({
                ...item,
                scendsTakenTo: scendsTakenTo(
                    new Date(item.createTime).getTime()
                )
            }));
        },
        getInitState(state) {
            Object.assign(state, {
                countDetail: {},
                lastBlock: [],
                lastTransactions: []
            });
        }
    }
});

export const {
    getInitState,
    getCountDetail,
    getLastBlock,
    getLastTransactions
} = homeSlice.actions;

// 获取页面总览数据
export const asyncGetCountDetail = () => (dispatch: Dispatch<AnyAction>) => {
    return request
        .get('/dashboard/countDetail')
        .then((res: any) => {
            return dispatch(getCountDetail(res?.data));
        })
        .catch(e => {
            console.log(e, 'err 4');
        });
};
// 获取最近出块
export const asyncGetLastBlock = () => (dispatch: Dispatch<AnyAction>) => {
    return request
        .get('/block/getLastBlock')
        .then((res: any) => {
            return dispatch(getLastBlock(res?.data));
        })
        .catch(e => {
            console.log(e, 'err 5');
        });
};
// 获取最近交易
export const asyncGetLastTransactions =
    () => (dispatch: Dispatch<AnyAction>) => {
        return request
            .get('/transactions/getLastTransactions')
            .then((res: any) => {
                return dispatch(getLastTransactions(res?.data));
            })
            .catch(e => {
                console.log(e, 'err 6');
            });
    };

export default homeSlice.reducer;
