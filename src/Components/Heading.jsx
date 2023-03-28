import React, { useContext } from "react";
import classes from "./Heading.module.css";
import { InvoiceContext } from "./../Home";
const Heading = () => {
  const details = useContext(InvoiceContext);
  return (
    <div className={classes.box}>
      <div className={classes.head}>
        {details.type == "A" ? (
          <div className={classes.tax}>Tax Invoice</div>
        ) : (
          <div className={classes.tax}>Proforma Invoice</div>
        )}
      </div>

      <div className={classes.company}>BHAGYA LAXMI S.S FABRICATIONS</div>
      <div className={classes.email}>
        <div>EMAIL :</div>
        <div>sales@bhagyalaxmissfabrications</div>
        <div>.com</div>
      </div>
      <div className={classes.desc1}>
        Specialist in : All types of Hospitals, HotelWorks & all kinds of works
      </div>
      <div className={classes.desc}>
        3-13-107/1, SURYANAGAR COLONY, CHANIKYAPURI COLONY, FCI GODOWNS ROAD,
        MALLAPUR, MEDCHAL MALKAJGIRI , Pin 500076, HYDERABAD , TELANGANA{" "}
      </div>
    </div>
  );
};

export default Heading;
