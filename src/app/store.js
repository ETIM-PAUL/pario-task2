import { configureStore } from "@reduxjs/toolkit";
import covidInfoSlice from "../redux/getDataSlice";

export const store = configureStore({
  reducer: {
    covidInfo: covidInfoSlice,
  },
});
