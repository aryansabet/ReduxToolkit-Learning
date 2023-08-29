// cakeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState, // we can use ES6 Shorthand too
  reducers: {
    ordered: (state /* action */) => {
      // in RTK we don't have to explicitly return the state
      // we can directly mutate the state
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { restocked, ordered } = cakeSlice.actions;
