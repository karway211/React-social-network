import React from 'react';
import { connect } from 'react-redux';
import { follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount, 
    // toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers
} from '../../redux/users-reducer';
import Users from './Users';
// import Axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
// import { usersAPI } from '../../api/api';


class UsersAPIComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={ this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch) => {
    // return {
    //     follow: (userId) => {
    //         dispatch(followAC(userId));
    //     },
    //     unfollow: (userId) => {
    //         dispatch(anFollowAC(userId));
    //     },
    //     setUsers: (users) => {
    //         dispatch(setUsersAC(users));
    //     },
    //     setCurrentPage: (pageNumber) => {
    //         dispatch(setCurrentPageAC(pageNumber))
    //     },
    //     setTotalUsersCount: (totalCount) => {
    //         dispatch(setTotalUsersCountAC(totalCount))
    //     },
    //     toggleIsFetching: (isFetching) => {
    //         dispatch(setToggleFetchingAC(isFetching))
    //     }
    // }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers
})(UsersAPIComponent)

export default UsersContainer;
