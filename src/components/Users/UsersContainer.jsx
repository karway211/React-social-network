import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, anFollowAC, setUsersAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(anFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
