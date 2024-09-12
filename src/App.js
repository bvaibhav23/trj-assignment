import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "./features/items/itemsSlice";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize the store with some default items
    const initialItems = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Fig",
      "Grape",
      "Kiwi",
      "Lemon",
      "Mango",
      "Nectarine",
    ];
    dispatch(setItems(initialItems));
  }, [dispatch]);

  return (
    <div className="app">
      <header>
        <h1>Item Filter App</h1>
      </header>
      <main>
        <SearchBar />
        <ItemList />
      </main>
    </div>
  );
}

export default App;
