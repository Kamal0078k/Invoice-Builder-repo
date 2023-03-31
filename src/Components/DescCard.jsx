import React, { useEffect, useState } from "react";
import classes from "./DescCard.module.css";

const DescCard = (props) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  useEffect(() => {
    if (props.name.Date != "") {
      var datePart = props.name.Date.match(/\d+/g);
      setYear(datePart[0].substring(2)); // get only two digits);
      setDay(datePart[2]);
      setMonth(datePart[1]);
    }
  }, [props]);
  return (
    <div className={classes.desccontainer}>
      <div className={classes.desccard}>
        <div>
          <div>
            BuyerName : <span>{props.name.Buyername}</span>{" "}
          </div>
          <div>
            Address : <span>{props.name.address}</span>
          </div>
          <div>
            GSTIN : <span>{props.name.GSTIN}</span>
          </div>
          <div>
            Invoice : <span>{props.name.Invoice}</span>{" "}
          </div>
          <div>
            DC no. : <span>{props.name.DCNo}</span>{" "}
          </div>
          <div>
            Date : <span>{day + "/" + month + "/" + year}</span>{" "}
          </div>
          <div>
            BuyerOrder no. : <span>{props.name.OrderNo}</span>{" "}
          </div>

          {props.Invoice == "A" ? (
            <div>
              {" "}
              GST : <span>SGST & CGST</span>
            </div>
          ) : (
            <div>
              GST : <span>IGST</span>
            </div>
          )}

          {props.GST == "A" ? (
            <div>
              {" "}
              Invoice type : <span>Tax Invoice</span>
            </div>
          ) : (
            <div>
              Invoice type : <span>Proforma Tax Invoice</span>
            </div>
          )}
        </div>
        <div>
          <button className={classes.submitha} onClick={props.onClick}>
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescCard;
