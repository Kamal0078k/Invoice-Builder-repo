import React from "react";
import { Link } from "react-router-dom";
import classes from "./Choice.module.css";

const Choice = () => {
  return (
    <div className={classes.homie}>
      <div className={classes.open}>
        <div className={classes.container}>
          <div className={classes.titlle}>Bhagya Laxmi S.S Fabrications</div>
          <button className={classes.option}>
            <Link to="/invoice">Invoice</Link>
          </button>
          <button className={classes.option}>Quotation</button>
        </div>
      </div>
    </div>
  );
};

export default Choice;
