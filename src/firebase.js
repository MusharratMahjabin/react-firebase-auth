
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcY_7cUCriS0ZBQeC8TFLzifmloBeQ1Hs",
  authDomain: "react-firebase-auth-7b308.firebaseapp.com",
  projectId: "react-firebase-auth-7b308",
  storageBucket: "react-firebase-auth-7b308.firebasestorage.app",
  messagingSenderId: "325715349885",
  appId: "1:325715349885:web:d4ed3393d44ef79534fc14"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
