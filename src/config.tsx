// src/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAqf…",
  authDomain: "aca-quiz-db3d8.firebaseapp.com",
  databaseURL: "https://aca-quiz-db3d8-default-rtdb.firebaseio.com", // Add your RTDB URL here
  projectId: "aca-quiz-db3d8",
  storageBucket: "aca-quiz-db3d8.appspot.com",
  messagingSenderId: "735874393894",
  appId: "1:735874393894:web:eabb9823d53aca19b143e7",
  measurementId: "G-SKRHBE2Q6C"
};

// Avoid double initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getDatabase(app);
export const storage = getStorage(app);
