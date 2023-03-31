import React, { useContext, useEffect } from "react";
import Heading from "./Heading";
import Second from "./Second";
import Items from "./Items";
import Third from "./Third";
import Fourth from "./Fourth";
import classes from "./Preview.module.css";
import InvoiceServices from "./../services/firebase-service";
import jsPDF from "jspdf";
import { InvoiceContext } from "../Home";

const Preview = () => {
  const details = useContext(InvoiceContext);

  const GeneratePDF = async () => {
    var doc = new jsPDF("p", "pt", "a4");

    doc.html(document.querySelector("#INVOICE"), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("Invoice.pdf");
      },
    });
    try {
      await InvoiceServices.addInvoice(details.name);
    } catch (err) {
      alert(err);
    }
    details.setName({
      Buyername: "",
      address: "",
      GSTIN: "",
      Invoice: "",
      Date: "",
      OrderNo: "",
      DCNo: "",
      data: {
        items: [],
      },
    });
  };
  return (
    <div>
      <div className={classes.border} id="INVOICE">
        <Heading />
        <Second />
        <Items />
        <Third />
        <Fourth />
      </div>
      <button className={classes.submitha} onClick={GeneratePDF}>
        Generate PDF
      </button>
    </div>
  );
};

export default Preview;
