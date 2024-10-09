// import { useState } from "react";
import PropTypes from "prop-types";

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      packed: PropTypes.bool,
    })
  ).isRequired,
};

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer>
        <div className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </div>
      </footer>
    );
  }
  // else{
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
  return (
    <>
      <footer>
        <div className="stats">
          <em>
            {packedPercent === 100
              ? `You got everything! Ready to go ✈️`
              : ` 💼 You have ${totalItems} on your list, and you already packed ${packedItems} (${packedPercent}%)`}
          </em>
        </div>
      </footer>
    </>
  );
  // }
}
