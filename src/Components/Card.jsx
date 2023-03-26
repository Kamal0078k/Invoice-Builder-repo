import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={classes.total}>
      <div className={classes.card}>
        <div className={classes.details}>
          <div>
            Buyername : <span>{props.buyername}</span>
          </div>
          <div>
            InvoiceNo. : <span>{props.Invoice}</span>
          </div>
          <div>
            Date : <span>{props.date}</span>
          </div>
        </div>

        <div className={classes.edde}>
          <button onClick={props.onClick} className={classes.submitha}>
            <Link to="/invoice">EDIT</Link>
          </button>
          <button onClick={props.onDelete} className={classes.submitha}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
