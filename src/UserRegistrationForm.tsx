import React from "react";
import { useState } from "react";
import { UserFormData } from "./user";
// import { useNavigate } from "react-router-dom";

interface UserRegistrationFormPropsInterface {
  register: (user: UserFormData) => Promise<void>;
}

const formInitialState: UserFormData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  zipCode: "",
  bio: "",
  hobbies: "",
  interests: "",
  friendRadius: 10,
  profilePic: undefined
};

export function UserRegistrationForm({ register }: UserRegistrationFormPropsInterface) {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState(formInitialState);

  function handleFileSelect(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files || evt.target.files.length === 0) {
      setFormData(oldData => ({
        ...oldData,
        profilePic: undefined
      }));

      return;
    }

    const file = evt.target.files[0];

    setFormData(oldData => ({
      ...oldData,
      profilePic: file
    }));
  }

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
      await register(formData);
    } catch (err) {
      console.log("bro what have you done")
    }
    // navigate("/");
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
            min={10000}
            max={99999}
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
            min={1}
            max={100}
          />
        </div>

        <div>
          <label htmlFor="profilePic-input">Profile Picture:</label>
          <input name="profilePic" id="profilePic-input" type="file" onChange={handleChange} />
        </div>

        <div>
          <button className="submit-btn">Register</button>
        </div>

      </form>
    </div>
  );
}

//FIXME: min/max numbers ???