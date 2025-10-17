import { createSlice } from "@reduxjs/toolkit";
import services from "../data/services";

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    allServices: services,
    filtered: services,
  },
  reducers: {
    filterByCategory: (state, action) => {
      if (action.payload === "All") {
        state.filtered = state.allServices;
      } else {
        state.filtered = state.allServices.filter(
          s => s.category === action.payload
        );
      }
    },
  },
});

export const { filterByCategory } = serviceSlice.actions;
export default serviceSlice.reducer;
