'use client'

import { createSlice } from "@reduxjs/toolkit";

const DialogSlice = createSlice({
    name: 'dialog',
    initialState: {
        customer: {
            showDetails: [],
            datas: []
        }
    },
    reducers: {
       setDatasCustomer(state, action) {
            return {
                ...state,
                customer: {
                    ...state.customer,
                    datas: action.payload
                }
            }
       },
       setShowCustomerDetails(state, action) {
            return {
                ...state,
                customer: {
                    ...state.customer,
                    showDetails: action.payload
                }
            }
       }
    },
})

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;