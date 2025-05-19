import React, { createContext, useContext, useState } from 'react';

// Create the context for user data
const UserContext = createContext();

// Custom hook to use user context
export const useUser = () => useContext(UserContext);

// Provider component that will wrap the app and provide context
export function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const value = {
    email,
    setEmail,
    name,
    setName,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}