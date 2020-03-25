import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


let initialState = {
  
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: state.users.map(u => u) && users: [...state.users] - записи идентичны
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        // users: state.users.map(u => u) && users: [...state.users] - записи идентичны
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id=>id!==action.userId)
      }
    }
    default:
      return state;
  }

}
          // followActionCreator
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//thunk
export const getUsers = (currentPage = 1, pageSize) => {//создатель санки
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));//диспатчим экшен-крейтер
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
          dispatch(toggleIsFetching(false)); //диспатчим экшен-крейтер
          dispatch(setUsers(data.items));//диспатчим экшен-крейтер
          dispatch(setTotalUsersCount(data.totalCount));//диспатчим экшен-крейтер
        });
  }
}
export const follow = (userId) => {//создатель санки
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
              dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
  }
}
export const unfollow = (userId) => {//создатель санки
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(data => {
            if (data.resultCode === 0) {
              dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
  }
}

export default usersReducer;
