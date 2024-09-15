import { createSlice } from "@reduxjs/toolkit";

const deviceLocationSlice=createSlice({
    name:"location",
    initialState:{pincode:"",district:"",village:"",displayName:"",stateIn:""},
    reducers:{
        setDeviceLocation(state,action){
            const {pincode,district,village,displayName,stateIn}=action.payload
            state.pincode=pincode || state.pincode
            state.district=district || state.district
            state.village=village || state.village
            state.displayName=displayName || state.displayName
            state.stateIn=stateIn || state.stateIn
        }
    }
})

export const deviceLocationActions=deviceLocationSlice.actions
export default deviceLocationSlice