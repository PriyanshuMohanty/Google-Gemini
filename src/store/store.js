import { configureStore } from "@reduxjs/toolkit";
import promptSlice from "./promptSlice";
import HamburgerSlice from "./HamburgerSlice";

const store = configureStore({
    reducer: {
        prompts: promptSlice,
        hamburger: HamburgerSlice
    }
})

export default store