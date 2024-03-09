// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCExe_Wi5c4r1DsmXW3URm2ofjkY2J63U4",
  authDomain: "drip-db.firebaseapp.com",
  projectId: "drip-db",
  storageBucket: "drip-db.appspot.com",
  messagingSenderId: "632901453410",
  appId: "1:632901453410:web:824e3a732c6fdd8d29333b",
  measurementId: "G-QC2CRQ6N85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
