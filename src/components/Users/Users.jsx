import React from 'react';
import styles from './Users.module.css';
import Axios from 'axios';
import userPhoto from '../../assets/images/photo.png'

const Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            });
        }
    };

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto} alt="avatar"/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
