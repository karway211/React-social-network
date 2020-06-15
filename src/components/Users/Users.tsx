import React, { FC } from 'react';
import Paginator from '../common/paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            { users.map(u => <User user={u}
                                        key={u.id}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow} />)}
        </div>
    </div>
}

export default Users;
