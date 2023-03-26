import React from "react";
import classes from "./Heading.module.css";
const Heading = () => {
  return (
    <div className={classes.box}>
      <div className={classes.tax}>Tax Invoice</div>
      <div className={classes.company}>BHAGYA LAXMI S.S FABRICATIONS</div>
      <div className={classes.desc}>
        Specialist in : All types of Hospitals, HotelWorks & all kinds of works
      </div>
      <div className={classes.desc}>
        # 3-5-223/3b, Road No. 8, Krishna Nagar, NFC Main Road, HB Colony,
        Hyderabad-500040{" "}
      </div>
    </div>
  );
};

export default Heading;
