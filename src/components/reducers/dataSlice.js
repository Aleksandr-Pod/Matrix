
import { createSlice } from '@reduxjs/toolkit';
import { genMatryx } from 'components/table/operateMatryx';

const data = genMatryx(10, 20);
// const sumsColumn = calcSums(data);
// const meansLine = calcMeans(data);

export const dataSlice = createSlice({
    name: 'data',
    initialState: data,
    reducers: {
        changeData(state, { payload }) {
            state[payload.x][payload.y].value += 1
        }
    }
})

const initArray = new Array(data.length);

export const percentSlice = createSlice({
    name: 'percent',
    initialState: initArray,
    reducers: {
        setPercent(state, { payload }) {state[payload.idx] = payload.calcPercent}
    }
})
export const { changeData } = dataSlice.actions;
export const { setPercent } = percentSlice.actions;
