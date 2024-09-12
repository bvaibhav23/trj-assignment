import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    filter: "",
    currentPage: 1,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setItems, setFilter, setPage } = itemsSlice.actions;
export default itemsSlice.reducer;
