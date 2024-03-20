import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slices/info.slice";
import isLoading from "./slices/isLoading";

export default configureStore({
    reducer: {
        isLoading,
        infoSlice
    }
})