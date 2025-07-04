import React, { useState } from 'react';
import { registerUser } from './manageRegistration'; // Import registration function

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Password validation logic
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Validate the password
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character.');
      return;
    }

    // Step 2: Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Step 3: Register the user with Firebase
      await registerUser(email, password, name);
      setSuccessMessage('Registration successful! Please log in.');
      setError(''); // Clear any errors
    } catch (err: any) {
      setError(err.message);  // Handle any registration errors
      setSuccessMessage('');  // Clear any success messages
    }
  };

  return (
    <div>
      <h2>Register</h2>
      
      {/* Display errors */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Display success message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
