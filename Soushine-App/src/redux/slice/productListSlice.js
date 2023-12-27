import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productListSlice = createSlice({
  name: "product-list",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductList } = productListSlice.actions;

export default productListSlice.reducer;
