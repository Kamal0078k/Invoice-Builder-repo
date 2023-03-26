import React, { useEffect, useRef, useState } from "react";
import classes from "./ItemsInput.module.css";
const ItemsInput = (props) => {
  const [items, setItems] = useState({});
  const SNRef = useRef(null);
  const DescRef = useRef(null);
  const HSNRef = useRef(null);
  const QtyRef = useRef(null);
  const UnitRef = useRef(null);

  const AddHandler = (e) => {
    e.preventDefault();
    const ITEMS = {
      Sno: SNRef.current.value,
      Desc: DescRef.current.value,
      HSN: HSNRef.current.value,
      Qty: QtyRef.current.value,
      Unit: UnitRef.current.value,
    };
    setItems((prev) => ITEMS);

    props.itemsObj(ITEMS);
  };
  return (
    <div className={classes.item}>
      <label>Item</label>
      <input type="number" ref={SNRef} placeholder="S.No" />
      <input type="text" ref={DescRef} placeholder="Description" />
      <input type="number" ref={HSNRef} placeholder="HSN" />
      <input type="number" ref={QtyRef} placeholder="Qty" />
      <input type="number" ref={UnitRef} placeholder="Unit Price" />
      <button onClick={AddHandler}>Add</button>
    </div>
  );
};

export default ItemsInput;
