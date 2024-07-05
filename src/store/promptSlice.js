import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prompt: "",
    prompts: [],
    recentPrompt: "",
    geminiResponse: ""
}

const promptSlice = createSlice({
    name: "prompts",
    initialState,
    reducers: {
        addPrompts(state, action) {
            if (!state.prompts.includes(action.payload) && state.recentPrompt !== "") {
                state.prompts.push(action.payload)
            }
        },
        newPrompt(state, action) {
            state.prompt = action.payload
        },
        setRecentPrompt(state, action) {
            state.recentPrompt = action.payload
        },
        setGeminiResponse(state, action) {
            state.geminiResponse = action.payload
        }
    }
})

export const { addPrompts, newPrompt, setGeminiResponse, setRecentPrompt } = promptSlice.actions


export default promptSlice.reducer