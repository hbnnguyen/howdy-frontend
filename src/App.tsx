import React, { useState } from 'react';
import './App.css';
import { UserRegistrationForm } from './UserRegistrationForm';
import { FriendlyApi } from './API';
import { UserFormData } from './user';
// import userContext from "./userContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({
    data: null,
    isLoading: true
  });

  async function register(user: UserFormData) {
    const newToken = await FriendlyApi.registerUser(user)
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  return (
    <UserRegistrationForm register={register} />
  );
}

export default App;
