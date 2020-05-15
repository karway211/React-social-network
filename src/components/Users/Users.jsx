import React from 'react';
import Paginator from '../common/paginator/Paginator';
import User from './User';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            { props.users.map(u => <User user={u}
                                        key={u.id}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow} />)}
        </div>
    </div>
}

export default Users;
