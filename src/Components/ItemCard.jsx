import React from "react";
import classes from "./ItemCard.module.css";
const ItemCard = (props) => {
  return (
    <div className={classes.itemcontainer}>
      <div className={classes.itemcard}>
        <div>
          <div>
            Description <span>{props.Desc}</span>{" "}
          </div>
          <div>
            HSN: <span>{props.HSN}</span>
          </div>
          <div>
            Qty: <span>{props.Qty}</span>
          </div>
          <div>
            Price : <span>{props.price}</span>
          </div>
        </div>
        <div>
          <button onClick={props.onEdit} className={classes.submitha}>
            EDIT
          </button>
          <button onClick={props.onDelete} className={classes.submitha}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
