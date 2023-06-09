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
      <div className="d-flex justify-content-center btn-group" role="group" aria-label="Basic outlined example">
        <button className="btn btn-outline-primary"onClick={() => onClickLikeDislike(false)}>REJECT</button>
        <button className="btn btn-outline-primary" onClick={() => onClickLikeDislike(true)}>FRIEND</button>
      </div>
    </div>
  );
}

export default Matching;