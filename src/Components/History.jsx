import React, { useEffect, useState, useContext, useRef } from "react";
import classes from "./History.module.css";
import InvoiceService from "./../services/firebase-service";
import Card from "./Card";
import {
  collection,
  query,
  where,
  orderBy,
  startAt,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./../firebase";
import { InvoiceContext } from "../Home";
const History = () => {
  const InvoiceRef = collection(db, "invoice");

  const details = useContext(InvoiceContext);

  const [invoice, setInvoice] = useState([]);
  const [search, setSearch] = useState("");
  const [relo, setRelo] = useState(true);

  useEffect(() => {
    getInvoice();
  }, [relo]);

  const getInvoice = async () => {
    const data = await InvoiceService.getAllInvoice();
    setInvoice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const q = query(
      InvoiceRef,
      where("Buyername", ">=", search),
      orderBy("Buyername"),
      startAt(search)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((doc) => {
        const docData = doc.data();
        fetchedData.push(docData);
      });
      setInvoice(fetchedData);
      return unsubscribe;
    });
  };

  return (
    <div className={classes.popup}>
      <div className={classes.history}>HISTORY</div>
      <form className={classes.fourm}>
        <input
          type="text"
          value={search}
          className={classes.searchinput}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchHandler} className={classes.searchbutton}>
          {" "}
          Search
        </button>
      </form>
      {invoice.length == 0 ? (
        <div className={classes.loading}>Loading...</div>
      ) : (
        invoice.map((e) => (
          <Card
            buyername={e.Buyername}
            Invoice={e.Invoice}
            date={e.Date}
            key={e.id}
            onClick={() => {
              details.setHistory((prev) => !prev);
              details.setName(e);
              details.setFkname(e);
            }}
            onDelete={() => {
              InvoiceService.deleteInvoice(e.id);
              setRelo((prev) => !prev);
            }}
          />
        ))
      )}
    </div>
  );
};

export default History;
