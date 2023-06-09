import React from "react";
import { useState } from "react";
import { UserFormData } from "../user";
import { useNavigate } from "react-router-dom";

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
};

export function UserRegistrationForm({ register }: UserRegistrationFormPropsInterface) {
  const navigate = useNavigate();

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
      console.log("bro what have you done");
    }
    navigate("/");
  }

  return (
    <div>
      <form className="m-5 d-flex flex-column" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            id="email-input"
            value={formData.email}
            className="form-control"
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            id="password-input"
            value={formData.password}
            className="form-control"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            id="firstName-input"
            value={formData.firstName}
            className="form-control"
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            id="lastName-input"
            value={formData.lastName}
            className="form-control"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            min={10000}
            max={99999}
            type="number"
            name="zipCode"
            id="zipCode-input"
            value={formData.zipCode}
            className="form-control"
            placeholder="Zip Code"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="bio"
            id="bio-input"
            value={formData.bio}
            className="form-control"
            placeholder="Bio"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="hobbies"
            id="hobbies-input"
            value={formData.hobbies}
            className="form-control"
            placeholder="Hobbies"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="interests"
            id="interests-input"
            value={formData.interests}
            className="form-control"
            placeholder="Interests"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="friendRadius-input">Friend Radius:</label>
          <input
            type="number"
            name="friendRadius"
            id="friendRadius-input"
            value={formData.friendRadius}
            onChange={handleChange}
            placeholder="Friend Radius"
            className="form-control"
            min={1}
            max={100}
          />
        </div>

        <div>
          <button className="w-100 submit-btn btn btn-outline-primary">Register</button>
        </div>

      </form>
    </div>
  );
}

//FIXME: min/max numbers ???