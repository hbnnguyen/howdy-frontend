import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserRegistrationForm({ register }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    zipCode: "",
    bio: "",
    hobbies: "",
    interests: "",
    friendRadius: ""
  });

  /** Handle form change. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Handle form submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await register(formData);
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
          <label htmlFor="firstName-input">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName-input"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName-input">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName-input"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="zipCode-input">Zip Code:</label>
          <input
            type="number"
            name="zipCode"
            id="zipCode-input"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="bio-input">Bio:</label>
          <input
            type="text"
            name="bio"
            id="bio-input"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="hobbies-input">Hobbies:</label>
          <input
            type="text"
            name="hobbies"
            id="hobbies-input"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="interests-input">Interests:</label>
          <input
            type="text"
            name="interests"
            id="interests-input"
            value={formData.interests}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="friendRadius-input">Friend Radius:</label>
          <input
            type="number"
            name="friendRadius"
            id="friendRadius-input"
            value={formData.friendRadius}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}