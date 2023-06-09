import { useContext } from 'react';
import { User } from './user';

interface UserCardPropsInterface {
    user: User;
}

function UserCard({ user }: UserCardPropsInterface) {
    return (
        <div>
            <img src={user.imageKey} alt="profile picture" />
            <h4>{user.firstName}</h4>
            <p>{user.bio}</p>
            <p>{user.hobbies}</p>
            <p>{user.interests}</p>
        </div>
    );
}

export default UserCard