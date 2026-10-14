// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "test-96eb1.firebaseapp.com",
  projectId: "test-96eb1",
  storageBucket: "test-96eb1.firebasestorage.app",
  messagingSenderId: "878117136796",
  appId: "1:878117136796:web:c3b11ae881edca23908059",
  measurementId: "G-KEHG6K0HD7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
