import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
    name: 'message',
    initialState: {
        basicinformation: {
            theme: "",
            emotional: "",
            nickname: {
                author: '',
                audiences: '',
            }
        },
        icon: '',
        function: '',
        emoji: '',
        detail: '',
        gif: '',
        theme: '',
        choose: null,
    },
    reducers: {
        setBasicInformation(state, action) {
            return {
                ...state,
                basicinformation: action.payload
            }
        },
        SetIcon(state, action) {
            return {
                ...state,
                icon: action.payload,
            }
        },
        SetChoose(state, action) {
            return {
                ...state,
                choose: action.payload,
            }
        },
        SetFunction(state, action) {
            return {
                ...state,
                function: action.payload,
            }
        },
        SetEmoji(state, action) {
            return {
                ...state,
                emoji: action.payload,
            }
        },
        SetDetail(state, action) {
            return {
                ...state,
                detail: action.payload,
            }
        },
        SetGif(state, action) {
            return {
                ...state,
                gif: action.payload,
            }
        },
        SetTheme(state, action) {
            return {
                ...state,
                theme: action.payload
            }
        }
    },
})

export const MessageActions = MessageSlice.actions;
export default MessageSlice.reducer;