import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkUNtu2mmjUrEfi9S2XWYawH0ruuZSMjI",
  authDomain: "todolistreactnative-d242d.firebaseapp.com",
  projectId: "todolistreactnative-d242d",
  storageBucket: "todolistreactnative-d242d.appspot.com",
  messagingSenderId: "885361110130",
  appId: "1:885361110130:web:d1cb22fd5c64d1b8fb26eb",
  measurementId: "G-83X2XM9DQF",
};

export const FIREBASEAPP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASEAPP);
export const FIREBASE_AUTH = getAuth(FIREBASEAPP);
