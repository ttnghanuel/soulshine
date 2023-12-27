import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  countLoading: 0,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      if (action.payload === true) {
        state.isLoading = true;
        state.countLoading = state.countLoading + 1;
      } else {
        state.countLoading = state.countLoading - 1;
        if (state.countLoading === 0) {
          state.isLoading = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
