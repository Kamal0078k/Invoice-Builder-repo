import React, { createContext, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Choice from "./Choice";
import History from "./Components/History";
import Preview2 from "./Components/Preview";
export const InvoiceContext = createContext(null);
const Home = () => {
  const [selected, setSelected] = useState("A");
  const [type, setType] = useState("A");
  const [history, setHistory] = useState(false);
  const [fkiitem, setFkiitem] = useState([]);
  const [name, setName] = useState({
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
  const [fkname, setFkname] = useState({
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

  const contextValue = useMemo(
    () => ({
      name,
      fkname,
      fkiitem,
      type,
      setType,
      selected,
      setSelected,
      setFkiitem,
      setFkname,
      setName,
      setHistory,
    }),
    [name, fkname, history, fkiitem]
  );

  return (
    <InvoiceContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Choice />} />
        <Route path="/invoice" element={<App />} />
        <Route path="/history" element={<History />} />
        <Route path="/invoice/:id" element={<App />} />
        <Route path="/invoice/preview" element={<Preview2 />} />
      </Routes>
    </InvoiceContext.Provider>
  );
};

export default Home;
