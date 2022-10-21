import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        routeParam: {},
        pathname: '',
    },
    reducers: {
        updateRoute(state, { payload }) {
            const { params, pathname } = payload;
            state.routeParam = params;
            state.pathname = pathname;
        }
    },
});

export const { updateRoute } = mainSlice.actions;

export default mainSlice.reducer;