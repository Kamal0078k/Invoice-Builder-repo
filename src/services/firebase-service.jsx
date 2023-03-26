import { db } from "./../firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

const InvoiceRef = collection(db, "invoice");

class InvoiceService {
  addInvoice = (invoice) => {
    return addDoc(InvoiceRef, invoice);
  };

  updateInvoice = (id, updatedInvoice) => {
    const Invoicedoc = doc(db, "invoice", id);
    return updateDoc(bookdoc, updatedInvoice);
  };

  deleteInvoice = (id, deletedinvoice) => {
    const Invoicedoc = doc(db, "invoice", id);
    return deleteDoc(Invoicedoc);
  };

  getAllInvoice = () => {
    return getDocs(InvoiceRef);
  };

  getInovice = (id) => {
    const Invoicedoc = doc(db, "invoice", id);
    return getDoc(Invoicedoc);
  };
}

export default new InvoiceService();
