// icecreamSlice.js

import { createSlice } from "@reduxjs/toolkit";

import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState = {
  numOfIcecreams: 10,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState, // we can use ES6 Shorthand too
  reducers: {
    ordered: (state /* action */) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
