import React from "react";
import classes from "./Fourth.module.css";

const Fourth = () => {
  return (
    <div className={classes.fourth}>
      <div>
        <div className={classes.GSTIN}>GSTIN : 36AKVPA5000B2ZP</div>
      </div>
      <div className={classes.ending}>
        <div className={classes.left}>
          <div className={classes.termss}>Terms & Conditions : </div>
          <div className={classes.terms}>
            Goods once sold will not be taken back.
          </div>
          <div className={classes.terms}>
            Interest 24% will be charged on this bi, if not settled within 7
            days.
          </div>
          <div className={classes.terms}>
            Declaration : We declare that this inovice shows the actual price of
            the goods discribed and that all particulars are true and correct.
          </div>
        </div>
        <div className={classes.middle}>E. & O.E.</div>
        <div className={classes.right}>
          {" "}
          <span>For Bhagya Laxmi S.S Fabrications</span>{" "}
        </div>
      </div>
      <div className={classes.sign}>Authority Signature</div>
    </div>
  );
};

export default Fourth;
