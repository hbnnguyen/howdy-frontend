import React from "react";
import { useState } from "react";
import { UserLoginData } from "../user";
import { useNavigate } from "react-router-dom";

interface UserLoginFormPropsInterface {
  login: (user: UserLoginData) => Promise<void>;
}

const formInitialState: UserLoginData = {
  email: "",
  password: ""
};

export function UserLoginForm({ login }: UserLoginFormPropsInterface) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(formInitialState);

  /** Handle form change. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }));
  }

  /** Handle form submit. */
  async function handleSubmit(evt: React.FormEvent) {
    console.log("uhhh submit????");
    evt.preventDefault();
    try {
      await login(formData);
    } catch (err) {
      console.log("bro what have you done")
    }
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password-input">Password:</label>
          <input
            type="password"
            name="password"
            id="password-input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="submit-btn">Login</button>
        </div>

      </form>
    </div>
  );
}