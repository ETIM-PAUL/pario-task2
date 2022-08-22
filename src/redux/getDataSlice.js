import { createSlice } from "@reduxjs/toolkit";

export const covidInfoSlice = createSlice({
  name: "covidInfo",
  initialState: {
    covidInfo: {},
  },
  reducers: {
    setCovidInfo: (state, { type, payload }) => {
      return {
        ...state,
        covidInfo: payload.data,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCovidInfo } = covidInfoSlice.actions;

export default covidInfoSlice.reducer;
