import { useContext } from 'react';
import { User } from '../user';

interface FriendCardPropsInterface {
    user: User;
}

function FriendCard({ user }: FriendCardPropsInterface) {
    return (
        <div className="d-flex card justify-content-center" style={{ width: "30rem", height: "40rem" }}>
            <div className="card-body d-flex flex-column justify-content-center gap-2">
                <img className="card-img-top w-50 mx-auto" src={user.imageKey} alt="profile" />
                <h4 className='mx-auto'>{user.firstName}</h4>
                <p><b>Bio:</b>  {user.bio}</p>
                <p><b>Hobbies:</b>  {user.hobbies}</p>
                <p><b>Interests:</b> {user.interests}</p>
            </div>
        </div>
    );
}

export default FriendCard;