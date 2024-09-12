import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/items/itemsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.items.filter);

  const handleChange = useCallback(
    (event) => {
      dispatch(setFilter(event.target.value));
    },
    [dispatch]
  );

  return (
    <input
      type="search"
      value={filter}
      onChange={handleChange}
      placeholder="Search for items..."
      className="search-bar"
    />
  );
};

export default SearchBar;
