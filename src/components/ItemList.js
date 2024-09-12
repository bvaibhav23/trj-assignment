import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = React.memo(() => {
  const items = useSelector((state) => state.items.items);
  const filter = useSelector((state) => state.items.filter);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="item-list">
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
});

export default ItemList;
