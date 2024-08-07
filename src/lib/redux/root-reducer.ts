import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './feature/apiSlice';




export const reducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
});