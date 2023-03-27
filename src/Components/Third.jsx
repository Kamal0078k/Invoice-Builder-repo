import React, { useContext, useEffect, useState } from "react";
import classes from "./Third.module.css";
import converter from "number-to-words";
import { InvoiceContext } from "./../Home";
import rupee from "./../assets/rupee1.jpg";
import { ToWords } from "to-words";

const Third = () => {
  const details = useContext(InvoiceContext);
  const [amount, setAmount] = useState(0);
  const [words, setWords] = useState();
  let lengthh = details.name.data.items.length;

  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < lengthh; i++) {
      sum += details.name.data.items[i].Qty * details.name.data.items[i].Unit;
    }
    setAmount(sum);
  }, [details]);

  useEffect(() => {
    let wards = toWords.convert(amount);
    setWords(wards);
  }, [amount]);

  return (
    <div className={classes.third}>
      <div className={classes.first}>
        {" "}
        <span>Ruppes in words: </span> {words}
      </div>
      <div>
        <div className={classes.tottax}>
          <div className={classes.total}>
            <div className={classes.label}>Total</div>
            <div className={classes.amount}>
              Rs.{amount.toLocaleString("en-IN")}/-
            </div>
          </div>
          {details.selected == "A" ? (
            <>
              <div className={classes.total}>
                <div className={classes.label}>SGST: 9%</div>
                <div className={classes.amount}>
                  Rs.{(0.09 * amount).toLocaleString("en-IN")}/-
                </div>
              </div>
              <div className={classes.total}>
                <div className={classes.label}>CGST: 9%</div>
                <div className={classes.amount}>
                  Rs.{(0.09 * amount).toLocaleString("en-IN")}/-
                </div>
              </div>
            </>
          ) : (
            <div className={classes.total}>
              <div className={classes.label}>IGST: 18%</div>
              <div className={classes.amount}>
                Rs.{(0.18 * amount).toLocaleString("en-IN")}/-
              </div>
            </div>
          )}

          <div className={classes.total}>
            <div className={classes.label}>G Total</div>
            <div className={classes.amount}>
              Rs.{Math.round(1.18 * amount).toLocaleString("en-IN")}/-
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
