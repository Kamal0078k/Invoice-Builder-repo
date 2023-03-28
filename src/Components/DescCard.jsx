import React from "react";
import classes from "./DescCard.module.css";

const DescCard = (props) => {
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
            Date : <span>{props.name.Date}</span>{" "}
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
