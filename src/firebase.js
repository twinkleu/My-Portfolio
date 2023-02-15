import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA8xe5vCAc4MELmr-G9oLlyRhFiRU5hImw",
  authDomain: "twinkle-portfolio.firebaseapp.com",
  projectId: "twinkle-portfolio",
  storageBucket: "twinkle-portfolio.appspot.com",
  messagingSenderId: "467922083727",
  appId: "1:467922083727:web:d837e471cb2381da43b5fa",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
