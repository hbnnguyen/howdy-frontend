import React, { useState } from 'react';
import './App.css';
import { UserRegistrationForm } from './UserRegistrationForm';
import { FriendlyApi } from './API';
import userContext from "./userContext";



export interface User {
  email: string,
  password:string,
  firstName: string,
  lastName: string,
  zipCode: string,
  bio: string | null,
  hobbies: string | null,
  interests: string | null,
  friendRadius: number | null;
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({
    data: null,
    isLoading: true
  });

  async function register(user: User) {
    const newToken = await FriendlyApi.registerUser(user)
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  return (
    <UserRegistrationForm register={register} />
  );
}

export default App;
