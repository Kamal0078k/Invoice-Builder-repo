import React, { useEffect, useContext } from "react";
import Heading from "./Heading";
import Second from "./Second";
import Items from "./Items";
import Third from "./Third";
import Fourth from "./Fourth";
import classes from "./Preview.module.css";
import InvoiceServices from "./../services/firebase-service";

import { InvoiceContext } from "./../Home";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Preview = () => {
  const pdfExportComponent = React.useRef(null);

  const details = useContext(InvoiceContext);
  const GeneratePDF = async () => {
    // var doc = new jsPDF("p", "pt", "a4");
    // doc.html(document.querySelector("#INVOICE"), {
    //   callback: function (pdf) {
    //     var pageCount = doc.internal.getNumberOfPages();
    //     pdf.deletePage(pageCount);
    //     pdf.save("Invoice.pdf");
    //   },
    // });

    let element = document.querySelector("#INVOICE") || document.body;
    savePDF(element, {
      paperSize: "A4",
    });
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }

    try {
      InvoiceServices.addInvoice(details.name);
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
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div className={classes.border} id="INVOICE">
          <Heading />
          <Second />
          <Items />
          <Third />
          <Fourth />
        </div>
      </PDFExport>
      <button className={classes.submitha} onClick={GeneratePDF}>
        Generate PDF
      </button>
    </div>
  );
};

export default Preview;
