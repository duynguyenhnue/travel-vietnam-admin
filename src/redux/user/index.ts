import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user: null
    },
    reducers: {
        setUser(state, action) {
            return {
                ...state,
                user: action.payload
            }
        },
    },
})

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;