import React, { useEffect, useState } from "react";
import userContext from "./userContext";
import { useContext } from 'react';
import { User } from "./user";
import { FriendlyApi } from "./API";
import UserCard from "./UserCard";

function Matching() {
  const [potentialMatch, setPotentialMatch] = useState<User | undefined>(undefined);
  const { user } = useContext(userContext);

  async function getPotentialMatch() {
    const newPotentialMatch = await FriendlyApi.getNextPotentialMatch();
    console.log(newPotentialMatch);
    setPotentialMatch(newPotentialMatch);
  }

  useEffect(function getPotentialMatchOnUpdate() {
    getPotentialMatch();
  }, []);

  async function onClickLikeDislike(liked: boolean) {
    await FriendlyApi.likeOrDislikeUser(potentialMatch!.id, liked);
    //TODO: handle match?????

    getPotentialMatch();
  }

  if (potentialMatch === undefined) {
    return (<h4>Loading...</h4>);
  }

  return (
    <div>
      <UserCard user={potentialMatch} />
      <div>
        <button onClick={() => onClickLikeDislike(false)}>REJECT</button>
        <button onClick={() => onClickLikeDislike(true)}>FRIEND NOW</button>
      </div>
    </div>
  );
}

export default Matching;