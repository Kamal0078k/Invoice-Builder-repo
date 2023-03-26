import React, { useEffect, useState, useContext } from "react";
import classes from "./Items.module.css";
import SingleItem from "./SingleItem";
import { InvoiceContext } from "../Home";

const Items = () => {
  const details = useContext(InvoiceContext);
  const [mark, setMark] = useState(details.name);
  useEffect(() => {
    setMark(details.name);
  }, [details]);

  const removeHandler = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.box}>
      <div className={classes.headings}>
        <div>S.No</div>
        <div className={classes.Desc}>Description</div>
        <div className={classes.HSN}>HSN</div>
        <div className={classes.Qty}>Qty</div>
        <div className={classes.Price}>Unit Price</div>
        <div className={classes.Amo}>Amount</div>
      </div>
      {details.name.data.items.map((e) => {
        const index = details.name.data.items.indexOf(e);
        return (
          <SingleItem
            Sno={index + 1}
            desc={e.Description}
            HSN={e.HSN}
            Qty={e.Qty}
            Price={e.Unit.toLocaleString("en-IN")}
            amount={`₹${(e.Unit * e.Qty).toLocaleString("en-IN")}`}
            onClick={() => {
              const index = details.name.data.items.indexOf(e);
              details.name.data.items.splice(index, 1);
              setMark((prev) => !prev);
            }}
            onEdit={() => {
              details.setFkiitem(e);
              const index = details.name.data.items.indexOf(e);
              details.name.data.items.splice(index, 1);
              setMark((prev) => !prev);
            }}
          />
        );
      })}
    </div>
  );
};

export default Items;
