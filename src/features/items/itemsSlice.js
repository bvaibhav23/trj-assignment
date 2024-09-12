import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setItems, setFilter } = itemsSlice.actions;
export default itemsSlice.reducer;
