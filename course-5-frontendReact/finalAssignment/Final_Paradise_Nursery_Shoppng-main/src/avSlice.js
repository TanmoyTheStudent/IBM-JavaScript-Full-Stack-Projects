import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqime-xysGC1Mro9RHpr7dJvkcde5O91Mg&s",
      name: "Organic Fertilizer (1kg)",
      cost: 20,
      quantity: 0,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqime-xysGC1Mro9RHpr7dJvkcde5O91Mg&s",
      name: "Potting Soil (5L)",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqime-xysGC1Mro9RHpr7dJvkcde5O91Mg&s",
      name: "Gardening Tools Set",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqime-xysGC1Mro9RHpr7dJvkcde5O91Mg&s",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaqime-xysGC1Mro9RHpr7dJvkcde5O91Mg&s",
      name: "Watering Can",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
