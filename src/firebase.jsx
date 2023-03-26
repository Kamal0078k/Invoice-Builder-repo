// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIGeFHz9G0cAYHO7bUHB99564N8Zgq9hk",
  authDomain: "invoice-4a60f.firebaseapp.com",
  projectId: "invoice-4a60f",
  storageBucket: "invoice-4a60f.appspot.com",
  messagingSenderId: "723699286982",
  appId: "1:723699286982:web:654b9392707b60fda828c7",
  measurementId: "G-RGSVT04VJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
