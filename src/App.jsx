import {
  useState,
  useRef,
  useEffect,
  useContext,
  useMemo,
  createContext,
} from "react";
import InvoiceServices from "./services/firebase-service";
import classes from "./App.module.css";
import Heading from "./Components/Heading";
import Second from "./Components/Second";
import jsPDF from "jspdf";
import Items from "./Components/Items";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import { db } from "./firebase";
import { Link } from "react-router-dom";
import History from "./Components/History";
import { InvoiceContext } from "./Home";
import { ToWords } from "to-words";
import ItemCard from "./Components/ItemCard";

// export const InvoiceContext = createContext(null);

function App() {
  const details = useContext(InvoiceContext);
  // const [fkname, setFkname] = useState({
  //   Buyername: "",
  //   address: "",
  //   GSTIN: "",
  //   Invoice: "",
  //   Date: "",
  //   OrderNo: "",
  //   DCNo: "",
  //   data: {
  //     items: [],
  //   },
  // });
  // const [name, setName] = useState({
  //   Buyername: "",
  //   address: "",
  //   GSTIN: "",
  //   Invoice: "",
  //   Date: "",
  //   OrderNo: "",
  //   DCNo: "",
  //   data: {
  //     items: [],
  //   },
  // });
  const [mark, setMark] = useState(details.name);
  const [amount, setAmount] = useState(0);
  const [iitem, setIitem] = useState([]);
  // const [history, setHistory] = useState(false);
  // const [fkiitem, setFkiitem] = useState([
  //   // {
  //   //   Sno: "",
  //   //   Description: "",
  //   //   HSN: "",
  //   //   Qty: "",
  //   //   Unit: "",
  //   // },
  // ]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    details.setName(details.fkname);
    console.log(details.name);
    details.setFkname({
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

  useEffect(() => {
    console.log(details.name);
  }, [details.name]);

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

  const HistoryHandler = () => {
    details.setHistory((prev) => !prev);
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (details.fkiitem.Sno != "") {
    }
    const updatedObj = {
      ...details.name,
      option: details.selected,
      data: {
        ...details.name.data,
        items: [...details.name.data.items, details.fkiitem],
      },
    };

    details.setName(updatedObj);

    details.setFkiitem({
      Sno: "",
      Description: "",
      HSN: "",
      Qty: "",
      Unit: "",
    });
  };

  const [selected, setSelected] = useState("A");

  // const handleChange = (selectedOption) => {
  //   setSelected(selectedOption);
  //   console.log(`Option selected:`, selectedOption);
  // };

  useEffect(() => {
    console.log(details.name);
  }, [details.name]);

  // const contextValue = useMemo(
  //   () => ({
  //     name,
  //     setFkiitem,
  //     setFkname,
  //     setName,
  //     setHistory,
  //   }),
  //   [name]
  // );

  return (
    // <InvoiceContext.Provider value={contextValue}>
    <div className={classes.view}>
      <div className={classes.forms}>
        <div className={classes.cusdesc}>INVOICE</div>
        <form type="submit" className={classes.orgfor}>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>Buyer's Name :</label>
              <input
                type="text"
                className={classes.intup}
                value={details.fkname.Buyername}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,
                    Buyername: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>Address:</label>
              <input
                type="text"
                className={classes.intup}
                value={details.fkname.address}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,

                    address: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>GSTIN:</label>
              <input
                type="text"
                className={classes.intup}
                value={details.fkname.GSTIN}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,
                    GSTIN: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>Invoice No. :</label>
              <input
                type="number"
                className={classes.intup}
                value={details.fkname.Invoice}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,
                    Invoice: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>Date : </label>
              <input
                className={classes.intup}
                type="date"
                value={details.fkname.Date}
                onChange={(event) => {
                  details.setFkname({
                    ...details.fkname,
                    Date: event.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              <label className={classes.laleb}>Buyer's order no.:</label>
              <input
                type="number"
                className={classes.intup}
                value={details.fkname.OrderNo}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,
                    OrderNo: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.infut}>
            <div className={classes.infutcont}>
              {" "}
              <label className={classes.laleb}>DC no.:</label>
              <input
                type="number"
                className={classes.intup}
                value={details.fkname.DCNo}
                onChange={(event) =>
                  details.setFkname({
                    ...details.fkname,
                    DCNo: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={classes.sel}>
            <select
              defaultvalue="A"
              className={classes.GST}
              onChange={(e) => {
                details.setSelected(e.target.value);
              }}
            >
              <option value="A">SGST & CGST </option>
              <option value="B">IGST</option>
            </select>
          </div>
          <div className={classes.sel}>
            <select
              defaultvalue="A"
              className={classes.GST}
              onChange={(e) => {
                details.setType(e.target.value);
              }}
            >
              <option value="A">Invoice </option>
              <option value="B">Proforma Invoice</option>
            </select>
          </div>

          <button onClick={SubmitHandler} className={classes.submitha}>
            Submit
          </button>

          <div className={classes.item}>
            <label className={classes.itemhead}>Item</label>
            {/* <input type="number" value={fkiitem.Sno} placeholder="S.No" /> */}
            <div className={classes.iteminfut}>
              <input
                className={classes.intup}
                type="text"
                value={details.fkiitem.Description}
                placeholder="Description"
                onChange={(event) =>
                  details.setFkiitem({
                    ...details.fkiitem,
                    // Sno: name.data.items.length + 1,
                    Description: event.target.value,
                  })
                }
              />
            </div>
            <div className={classes.iteminfut}>
              <input
                type="number"
                className={classes.intup}
                value={details.fkiitem.HSN}
                placeholder="HSN"
                onChange={(event) =>
                  details.setFkiitem({
                    ...details.fkiitem,
                    HSN: event.target.value,
                  })
                }
              />
            </div>
            <div className={classes.iteminfut}>
              <input
                type="number"
                className={classes.intup}
                value={details.fkiitem.Qty}
                placeholder="Qty"
                onChange={(event) =>
                  details.setFkiitem({
                    ...details.fkiitem,
                    Qty: event.target.value,
                  })
                }
              />
            </div>
            <div className={classes.iteminfut}>
              <input
                type="number"
                className={classes.intup}
                value={details.fkiitem.Unit}
                placeholder="Unit Price"
                onChange={(event) =>
                  details.setFkiitem({
                    ...details.fkiitem,
                    Unit: event.target.value,
                  })
                }
              />
            </div>

            <button onClick={addItem} className={classes.submitha}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className={classes.popup}></div>

      {details.name.data.items.map((e) => (
        <ItemCard
          Desc={e.Description}
          HSN={e.HSN}
          Qty={e.Qty}
          price={e.Unit}
          onDelete={() => {
            const index = details.name.data.items.indexOf(e);
            details.name.data.items.splice(index, 1);
            setMark((prev) => !prev);
          }}
          onEdit={() => {
            details.setFkiitem(e);
            const index = details.name.data.items.indexOf(e);
            details.name.data.items.splice(index, 1);
            setMark((prev) => !prev);
          }}
        />
      ))}
      {/* {history ? <History /> : ""} */}
      {/* <div className={classes.border} id="INVOICE">
        <Heading />
        <Second />
        <Items />
        <Third />
        <Fourth />
      </div> */}
      <div className={classes.botbut}>
        <button className={classes.submitha}>
          <Link to="/invoice/preview">Preview</Link>
        </button>
        <button className={classes.submitha}>
          <Link to="/history">History</Link>
        </button>
      </div>
    </div>
    // {/* </InvoiceContext.Provider> */}
  );
}

export default App;
