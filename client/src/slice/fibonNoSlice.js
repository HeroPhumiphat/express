import { createSlice } from '@reduxjs/toolkit';

const fibonNoSlice = createSlice({
    name: 'fibonNo',
    initialState: {
        value: [0]
    },
    reducers: {
        addValue: (state, action) => {
            state.value.push(action.payload)
        },
        delValue: (state, action) => {
            if (state.value.length > 1) {
                state.value.pop(action.payload)
            }
        }
    }
})

export const { addValue, delValue } = fibonNoSlice.actions;
export default fibonNoSlice.reducer