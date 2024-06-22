import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slices/info.slice";
import isLoading from "./slices/isLoading";
import modalState from "./slices/modalState";

export default configureStore({
    reducer: {
        isLoading,
        infoSlice,
        modalState
    }
})