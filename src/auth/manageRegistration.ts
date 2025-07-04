// src/auth/manageRegistration.ts
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";  // Import necessary functions

// Function to register a new user
export const registerUser = async (email: string, password: string, name: string) => {
  const auth = getAuth();  // Get the Firebase Authentication instance

  try {
    // Register user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update the user's profile with their name
    await updateProfile(userCredential.user, { displayName: name });

    console.log("User registered successfully!");
  } catch (err: any) {
    console.error("Registration error:", err.message);
    throw new Error(err.message);  // Handle any errors during registration
  }
};
