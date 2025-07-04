import { firestore } from '../utils/firebase';  // Import Firestore instance
import { collection, addDoc, Timestamp } from 'firebase/firestore';  // Firebase Firestore modular methods

// Function to save the user’s results to Firestore
const saveUserResults = async (userId: string, email: string, score: number) => {
  try {
    // Get reference to the Firestore 'quizResults' collection
    const quizResultsRef = collection(firestore, 'quizResults');

    // Add the user’s data to Firestore with a timestamp
    await addDoc(quizResultsRef, {
      userId,
      email,
      score,
      timestamp: Timestamp.fromDate(new Date()), // Add timestamp to track when the result was saved
    });

    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export default saveUserResults;
