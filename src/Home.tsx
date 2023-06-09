import React from "react";
import userContext from "./userContext";
import { useContext } from 'react';

function Home() {
    const { user } = useContext(userContext);

    return (
        <div className='d-flex justify-content-center'>
            {user &&
                <div className='d-flex align-items-center flex-column h-100'>
                    <div>
                        <h1>welcome, {user?.firstName}</h1>
                    </div>
                    <img className="img-fluid h-25" src={user?.imageKey} alt="profile pic" />
                </div>
            }
            {!user && <h1> Join now! Make friends instantly! </h1>}
        </div>
    );
}

export default Home;