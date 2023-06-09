import React, { useEffect, useState } from "react";
import userContext from "../userContext";
import { useContext } from 'react';
import { User } from "../user";
import { FriendlyApi } from "../API";
import FriendCard from "./FriendCard";

function Friends() {
    const [friends, setFriends] = useState([]);
    const { user } = useContext(userContext);

    // useEffect(function getFriends)
}