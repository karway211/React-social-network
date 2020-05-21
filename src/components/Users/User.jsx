import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/photo.png'
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <div className={styles.userWrapper}>
            <div className={styles.item}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.usersPhoto} alt="avatar" />
                </NavLink>
            </div>
            <div className={styles.item}>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                            onClick={() => {unfollow(user.id);}}>Unfollow</button>
                    : <button disabled={ followingInProgress
                        .some(id => id===user.id) }
                            onClick={() => { follow(user.id);}}>Follow</button>}
            </div>
            <div className={styles.item}>
                <div>
                    <div><b>{user.name}</b></div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        </div>
    </div>
}

export default User;
