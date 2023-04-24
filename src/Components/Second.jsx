import React, { useContext, useEffect, useState } from "react";
import classes from "./Second.module.css";
import { InvoiceContext } from "../Home";

const Second = ({ children }) => {
  const details = useContext(InvoiceContext);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  useEffect(() => {
    if (details.name.Date != "") {
      var datePart = details.name.Date.match(/\d+/g);
      setYear(datePart[0].substring(2)); // get only two digits);
      setDay(datePart[2]);
      setMonth(datePart[1]);
    }
  }, [details]);

  return (
    <div className={classes.Second}>
      <div className={classes.buyer}>
        <div className={classes.details}>
          <span>Buyer's Name : </span> {details.name.Buyername}
        </div>
        <div className={classes.details}>
          <span>Address : </span>
          {details.name.address}
        </div>
        <div className={classes.details}>
          <span>Party's GSTIN Number : </span>
          {details.name.GSTIN}
        </div>
      </div>
      <div className={classes.otherdetails}>
        <div>
          {" "}
          <span>Invoice No. :</span>
          {details.name.Invoice}
        </div>
        <hr />
        <div>
          {" "}
          <span>Date :</span>
          {day}/{month}/{year}
        </div>
        <hr />
        <div>
          {" "}
          <span>Buyer's order no. :</span>
          {details.name.OrderNo}
        </div>
        <hr />
        <div>
          {" "}
          <span>DC,no. :</span>
          {details.name.DCNo}
        </div>
      </div>
    </div>
  );
};

export default Second;
