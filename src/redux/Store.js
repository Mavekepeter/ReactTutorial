import { configureStore } from "@reduxjs/toolkit";
import PreloaderSlice from "./Features/PreloaderSlice";
const store = configureStore({
    reducer:{
        preloader:PreloaderSlice.reducer
    }
})
export default store
