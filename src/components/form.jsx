import { useState } from "react";
import PropTypes from "prop-types";
Form.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  // YOU CAN DO THIS OR ....
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  // THIS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "" || quantity <= 0) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form
        className="add-form"
        // YOU CAN DO THIS OR ...
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   // console.log(e);
        // }}

        // THIS
        onSubmit={handleSubmit}
      >
        <h3>What do you need for 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {/* + can be used to convert to Number instead of Number() */}
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter any of your Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="add">ADD</button>
      </form>
    </>
  );
}
