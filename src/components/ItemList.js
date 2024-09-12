import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { setPage } from "../features/items/itemsSlice";

const ItemList = React.memo(() => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const filter = useSelector((state) => state.items.filter);
  const currentPage = useSelector((state) => state.items.currentPage);
  const itemsPerPage = 5;

  // Filtered items based on search
  const filteredItems = useMemo(
    () =>
      items.filter((item) => item.toLowerCase().includes(filter.toLowerCase())),
    [items, filter]
  );

  // Paginated items
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredItems.slice(start, end);
  }, [filteredItems, currentPage, itemsPerPage]);

  const totalPages = useMemo(
    () => Math.ceil(filteredItems.length / itemsPerPage),
    [filteredItems, itemsPerPage]
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };

  return (
    <div>
      <ul className="item-list">
        {paginatedItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {`<`}
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
});

export default ItemList;
