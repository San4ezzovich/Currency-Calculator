import {configureStore} from "@reduxjs/toolkit";
import {currencySlice} from "./currencySlice";



const store = configureStore({
    reducer: {
        currency: currencySlice.reducer,
    }
});

export default store;