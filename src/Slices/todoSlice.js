import { createSlice } from "@reduxjs/toolkit";

 export const todoListSlice= createSlice({
    name:'todos',
    initialState:[ 'eating','sleeping']
})
export default todoListSlice.reducer 