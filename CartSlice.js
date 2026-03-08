import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ Add Item to Cart
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    // ✅ Remove Item Completely
    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    // ✅ Update Quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id
      );

      if (!existingItem) return;

      if (type === "increase") {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }

      if (type === "decrease") {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;

        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== id
          );
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
