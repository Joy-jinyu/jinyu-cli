import { createSlice, configureStore } from '@reduxjs/toolkit';
import store from './features';

// 获取服务端store数据
export const getServerStore = () =>
  configureStore({
    reducer: store,
  })

// 客户端数据脱水，获取服务端缓存的数据
export const getClientStore = () => {
  const preloadedState = (window as any).PRE_LOADED_STATE || {}
  return configureStore({
    reducer: store,
    preloadedState: preloadedState,
  })
}
