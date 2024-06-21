import { configureStore } from "@reduxjs/toolkit";
import promptSlice from "./promptSlice";

const store = configureStore({
    reducer: {
        prompts: promptSlice
    }
})

export default store