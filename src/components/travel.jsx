import { useState } from "react";
// import data from "../js/travel";
import Logo from "./logo";
import Form from "./form";
import ParkingList from "./parkingList";
import Stats from "./stats";
// import PropTypes from "prop-types";
const Travel = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItem={addItem} />
      <ParkingList
        items={items}
        onDeleteItem={onDeleteItem}
        onChecked={handleCheckedItem}
        clearItems={handleClear}
      />
      <Stats items={items} />
    </>
  );
};

export default Travel;
