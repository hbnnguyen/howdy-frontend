import React, { useEffect, useState } from 'react';
import './App.css';
import { UserRegistrationForm } from './UserRegistrationForm';
import { FriendlyApi } from './API';
import { User, UserFormData } from './user';
import jwtDecode from 'jwt-decode';
// import userContext from "./userContext";

const TOKEN_STORAGE_KEY = "friendly_token";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(function getUserOnTokenUpdate() {

    async function getUser() {
      FriendlyApi.token = token;
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      if (!token) {
        setUser(null);
        return;
      }

      const decoded = jwtDecode<{ id: string; }>(token);
      const userId = decoded.id;

      const user = await FriendlyApi.getUser(userId);
      setUser(user);
    }
    getUser();
  }, [token]);


  async function register(user: UserFormData) {
    const newToken = await FriendlyApi.registerUser(user);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  return (
    <UserRegistrationForm register={register} />
  );
}

export default App;