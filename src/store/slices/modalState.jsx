import { createSlice } from "@reduxjs/toolkit";


export const modalState = createSlice({
    name:'modalState',
    initialState: true,
    reducers:{
       setModalState: (state, action) => action.payload
    }
}
)

export const { setModalState } = modalState.actions
export default modalState.reducer;