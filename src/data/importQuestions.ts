import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { questions } from './questions';  // Import your questions array

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAqflgShnCzEURE0LJdpaYPeqI2RupSj4",
  authDomain: "aca-quiz-db3d8.firebaseapp.com",
  databaseURL: "https://aca-quiz-db3d8-default-rtdb.firebaseio.com", 
  projectId: "aca-quiz-db3d8",
  messagingSenderId: "735874393894",
  appId: "1:735874393894:web:eabb9823d53aca19b143e7",
  measurementId: "G-SKRHBE2Q6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };
// Reference to the 'questions' collection in Firestore
const questionsRef = collection(db, "questions");

// Upload the questions as a single document
async function uploadQuestions() {
  try {
    const docRef = doc(questionsRef, "quiz_data"); 
    await setDoc(docRef, { questions });
    console.log('Questions uploaded successfully!');
  } catch (e) {
    console.error('Error uploading questions: ', e);
  }
}

uploadQuestions();
