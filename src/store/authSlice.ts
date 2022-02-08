import { createSlice } from "@reduxjs/toolkit";
import BaseApiService from "../common/service/baseApiService";

const service = new BaseApiService()

const initialState = {
    isAuthenticated: false,
    auth_token: "",
    email: "",
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        actionAuthAuthenthicateUser: (state, { payload }) => {
            state.isAuthenticated = true;
            state.auth_token = payload.auth_token;

            service.setAuthStorage(payload.auth_token)
        },
        actionAuthUnauthenticateUser: (state) => {
            state.isAuthenticated = false
            state.auth_token = ""

            service.deleteAuthStorage()
        }
    },
});

export const authSlice = slice.reducer;
export const { actionAuthAuthenthicateUser, actionAuthUnauthenticateUser } = slice.actions;
