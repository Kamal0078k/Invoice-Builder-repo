import React, { useEffect, useState } from "react";
import classes from "./SingleItem.module.css";
const SingleItem = (props) => {
  useEffect(() => {
    console.log({
      Sno: props.Sno,
      desc: props.desc,
      HSN: props.HSN,
      Qty: props.Qty,
      Price: props.Price,
      amount: props.amount,
    });
  }, [props]);

  return (
    <div className={classes.singleitem}>
      <div className={classes.arrange}>
        <div>{props.Sno}</div>
        <div className={classes.Desc}>{props.desc}</div>
        <div className={classes.HSN}> {props.HSN}</div>
        <div className={classes.Qty}>{props.Qty}</div>
        <div className={classes.Price}>{props.Price}</div>
        <div className={classes.Amo}>{props.amount}</div>
      </div>
    </div>
  );
};

export default SingleItem;
