'use client'

import { createSlice } from "@reduxjs/toolkit";

interface CustomerData {
    id: string;
    name: string;
}

export interface CustomerState {
    showDetails: string[];
    datas: CustomerData[];
}

const initialState: { customer: CustomerState } = {
    customer: {
        showDetails: [],
        datas: []
    }
};

const DialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setDatasCustomer(state, action: { payload: CustomerData[] }) {
            return {
                ...state,
                customer: {
                    ...state.customer,
                    datas: action.payload
                }
            }
        },
        setShowCustomerDetails(state, action: { payload: string[] }) { 
            return {
                ...state,
                customer: {
                    ...state.customer,
                    showDetails: action.payload
                }
            }
        }
    },
});

export const DialogActions = DialogSlice.actions;
export default DialogSlice.reducer;
