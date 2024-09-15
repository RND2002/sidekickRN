import { createSlice } from "@reduxjs/toolkit"

const userProfessionSlice=createSlice({
    name:"profession",
    initialState:{
      occupation:"",
      experience:"",
      description:""
    },
    reducers:{
      setUserProfession(state,action){
        const {occupation,experience,description}=action.payload
        state.occupation=occupation || state.occupation
        state.experience=experience || state.experience
        state.description=description || state.description
      }
    }
  })
  
  export const professionActions=userProfessionSlice.actions
  export default userProfessionSlice;