
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyARF3vfqFMBtOtWxo0i74W6X7ISIEeYLvU",
  authDomain: "appeatsx.firebaseapp.com",
  projectId: "appeatsx",
  storageBucket: "appeatsx.appspot.com",
  messagingSenderId: "524302422910",
  appId: "1:524302422910:web:c062a0d7abefe3d258992f",
  measurementId: "G-NJ7KL1TR65"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
console.clear();