import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    id:"",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    availability:null
  },
  reducers: {
    
    setUserData(state, action) {
      
      const { id,firstName, lastName, phone, role ,availability} = action.payload;
      state.id=id || state.id
      state.firstName = firstName || state.firstName;
      state.lastName = lastName || state.lastName;
      state.phone = phone || state.phone;
      state.role = role || state.role;
      state.availability=availability || state.availability
    }
  }
});


export const userActions = userSlice.actions;


export default userSlice;
