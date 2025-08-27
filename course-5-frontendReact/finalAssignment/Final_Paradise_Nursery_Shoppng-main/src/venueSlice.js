// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
      name: "Rose Plant",
      cost: 30,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
      name: "Succulent Plant",
      cost: 50,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
      name: "Orchid Plant",
      cost: 70,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
      name: "Fiddle Leaf Fig",
      cost: 90,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg",
      name: "Snake Plant",
      cost: 110,
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (
          state[index].name === " Succulent Plant" &&
          state[index].quantity >= 3
        ) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;
