// firebase.js (for Firebase setup)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Firestore
const firestore = getFirestore(app);

export { auth, firestore };
