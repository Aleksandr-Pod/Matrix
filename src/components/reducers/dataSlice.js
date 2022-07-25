import { createSlice } from '@reduxjs/toolkit';
import { genMatryx } from 'components/table/operateMatryx';

const data = genMatryx(10, 20);

export const dataSlice = createSlice({
    name: 'data',
    initialState: data,
    reducers: {
        changeData(state, { payload }) {
            state[payload.x][payload.y].value += 1
        }
    }
})

export const percentSlice = createSlice({
    name: 'percent',
    initialState: new Array(data.length),
    reducers: {
        setPercent(state, { payload }) {state[payload.idx] = payload.calcPercent}
    }
})
export const { changeData } = dataSlice.actions;
export const { setPercent } = percentSlice.actions;
