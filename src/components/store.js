import { configureStore } from '@reduxjs/toolkit';
import { dataSlice, percentSlice } from './reducers/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        percent: percentSlice.reducer
    }
})