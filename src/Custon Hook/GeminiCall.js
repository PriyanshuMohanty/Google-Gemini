import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import run from '../Gemini/Gemini'
import { addPrompts, newPrompt, setGeminiResponse, setRecentPrompt } from '../store/promptSlice'

function GeminiCall() {
    const dispatch = useDispatch();
    const { prompt, prompts } = useSelector((state) => state.prompts)

    const gemini = useCallback(async (prompt) => {
        dispatch(setGeminiResponse(""))
        dispatch(setRecentPrompt(prompt))
        dispatch(newPrompt(""))
        dispatch(addPrompts(prompt))
        const respones = await run(prompt)
        dispatch(setGeminiResponse(respones))
    }, [prompt, prompts])

    return gemini
}

export default GeminiCall
