import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:false,
        token:null
    },
    reducers:{
        login(state,actions){
            state.isAuthenticated=true
            state.token=actions.payload.token
        },
        logout(state){
            state.isAuthenticated=false
            state.token=""
        },
    }
})

export const authActions=authSlice.actions
export default authSlice