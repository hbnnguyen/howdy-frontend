import React from "react";
import userContext from "./userContext";
import { useContext } from 'react';

function Home() {
    const { user } = useContext(userContext);

    return (
        <div>
            {user && <h1>welcome, {user?.firstName}</h1>}
            {!user && <h1> welcome, friend </h1>}
        </div>
    );
}

export default Home;