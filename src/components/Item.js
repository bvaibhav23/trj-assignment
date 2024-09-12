import React from "react";

const Item = React.memo(({ item }) => {
  return <li className="item">{item}</li>;
});

export default Item;
