import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  quantity: 0,
  totalOrgPrice: 0,
  totalSalePrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart: (state, action) => {
      if (state.data.length === 0) {
        state.data = [{ ...action.payload }];
      } else {
        const checkItemInCart = state.data.find((item) => item.id === action.payload.id);
        if (checkItemInCart) {
          checkItemInCart.quantity += action.payload.quantity;
        } else {
          state.data = [...state.data, { ...action.payload }];
        }
      }
      state.quantity += action.payload.quantity;
      // Update total price
      if (action.payload.salePrice) {
        state.totalOrgPrice += action.payload.orgPrice * action.payload.quantity;
        state.totalSalePrice += action.payload.salePrice * action.payload.quantity;
      } else {
        state.totalOrgPrice += action.payload.orgPrice * action.payload.quantity;
        state.totalSalePrice += action.payload.orgPrice * action.payload.quantity;
      }
    },
    setCartQuantity: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      itemInCart.quantity += action.payload.quantity;
      state.data = state.data.filter((item) => item.quantity > 0);
      state.quantity += action.payload.quantity;
      // Update total price
      if (itemInCart.salePrice) {
        state.totalOrgPrice += itemInCart.orgPrice * action.payload.quantity;
        state.totalSalePrice += itemInCart.salePrice * action.payload.quantity;
      } else {
        state.totalOrgPrice += itemInCart.orgPrice * action.payload.quantity;
        state.totalSalePrice += itemInCart.orgPrice * action.payload.quantity;
      }
    },
    setEmptyCart: (state) => {
      state.data = [];
      state.quantity = 0;
      state.salePrice = 0;
      state.orgPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddToCart, setCartQuantity, setEmptyCart } = cartSlice.actions;

export default cartSlice.reducer;
