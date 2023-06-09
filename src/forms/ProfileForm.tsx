import React, { useState } from "react";
// import userContext from "./userContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ProfilePicData } from "../user";

const formInitialState: ProfilePicData = {
    image: undefined
  };

function ProfileForm() {
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
            <label htmlFor="profilePic-input">Profile Picture:</label>
            <input name="profilePic" id="profilePic-input" type="file" onChange={handleChange} />
        </div>
    );
}