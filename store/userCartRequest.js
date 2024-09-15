import { createSlice } from "@reduxjs/toolkit";

const userCartDataSlice = createSlice({
  name: "cartdata",
  initialState: {
    problemDescription: "",
    // street: "",
    // landMark: "",
    // pincode: "",
    // city: "",
    // state1: "",
    providerId: null
  },
  reducers: {
    setUserCartData(state, action) {
      const {
        problemDescription,
        // street,
        // landMark,
        // pincode,
        // city,
        // state1,
        providerId
      } = action.payload;
      console.log("Action payload:", action.payload);
      state.problemDescription = problemDescription || state.problemDescription;
    //   state.street = street || state.street;
    //   state.landMark = landMark || state.landMark;
    //   state.pincode = pincode || state.pincode;
    //   state.city = city || state.city;
    //   state.state1 = state1 || state.state1;
      state.providerId = providerId || state.providerId;
    }
  }
});

export const cartDataActions = userCartDataSlice.actions;
export default userCartDataSlice;