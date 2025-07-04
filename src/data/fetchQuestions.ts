// fetchQuestions.ts
import { db } from './importQuestions';  // Firebase setup
import { doc, getDoc } from 'firebase/firestore';

async function getQuestions() {
  try {
    // Reference to the 'quiz_data' document in the 'questions' collection
    const docRef = doc(db, "questions", "quiz_data");  // The document ID is 'quiz_data'
    const docSnap = await getDoc(docRef); // Fetch the document

    if (docSnap.exists()) {
      const data = docSnap.data();  // Fetch document data
      console.log("Fetched Data from Firestore: ", data); // Log fetched data for debugging

      // Check if the 'questions' field exists in the document
      if (data && data.questions) {
        console.log("Fetched Questions: ", data.questions); // Log the actual questions array
        return data.questions;  // Return the questions array
      } else {
        console.log("No questions field in document or empty questions.");
        return [];  // Return empty array if no questions field exists
      }
    } else {
      console.log("No such document found!");
      return [];  // Return empty array if document doesn't exist
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];  // Return an empty array in case of error
  }
}

export { getQuestions };
