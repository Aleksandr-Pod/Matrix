
import { createSlice } from '@reduxjs/toolkit';
import { genMatryx } from 'components/table/operateMatryx';

const data = genMatryx(3, 5);
// const sumsColumn = calcSums(data);
// const meansLine = calcMeans(data);

export const dataSlice = createSlice({
    name: 'data',
    initialState: data,
    reducers: {
        changeData(state, { payload }) {
            console.log('payload', payload);
            state[payload.x][payload.y].value += 1
        }
    }
})
export const { changeData } = dataSlice.actions; 