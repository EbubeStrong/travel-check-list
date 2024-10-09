import { useState } from "react";
import PropTypes from "prop-types";

ParkingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      packed: PropTypes.bool,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  clearItems: PropTypes.func.isRequired,
};

export default function ParkingList({
  items,
  onDeleteItem,
  onChecked,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [...items];
  // if (sortBy === "input") {
  //   return sortedItems
  // }

  if (sortBy === "description") {
    sortedItems = sortedItems.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = sortedItems.sort((a, b) => a.packed - b.packed);
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onChecked={onChecked}
            />
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by input descritption</option>
            <option value="packed">Sort by input packed</option>
          </select>

          <button
            className="clear"
            onClick={() =>
              window.confirm("Are you sure you want to delete all items?")
                ? clearItems()
                : null
            }
          >
            Clear List
          </button>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    packed: PropTypes.bool,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
};

function Item({ item, onDeleteItem, onChecked }) {
  if (!item) return null;
  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onChecked(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
