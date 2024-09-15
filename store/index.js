import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import userProfessionSlice from "./userProfessionSlice";
import deviceLocationSlice from "./locationSlice";

const store=configureStore({
        reducer:{
            auth:authSlice.reducer,
            loggedInUser:userSlice.reducer,
            userProfession:userProfessionSlice.reducer,
            deviceLocation:deviceLocationSlice.reducer
        }
})

export default store