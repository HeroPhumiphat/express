import { configureStore } from '@reduxjs/toolkit';
import fibonNoSlice from './slice/fibonNoSlice';

export default configureStore ({
    reducer: {
        fibonNo: fibonNoSlice,
    }
})