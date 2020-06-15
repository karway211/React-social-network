import { AppStateType } from './redux-store';
import { PhotosType, UserType } from './../types/types';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // Array of users Id
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
        // users: state.users.map(u => u) && users: [...state.users] - записи идентичны
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return {...u, followed: true}
        //   }
        //   return u;
        // })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
        // users: state.users.map(u => u) && users: [...state.users] - записи идентичны
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return {...u, followed: false}
        //   }
        //   return u;
        // })
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }

}
// ActionCreator
type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | ToggleIsFollowingProgressActionType
  | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type ToggleIsFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });

//thunk
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page = 1,  //создатель санки
  pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));//диспатчим экшен-крейтер
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false)); //диспатчим экшен-крейтер
    dispatch(setUsers(data.items));//диспатчим экшен-крейтер
    dispatch(setTotalUsersCount(data.totalCount));//диспатчим экшен-крейтер
  }
};

const _followUnfollowFlow = async (dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {//создатель санки
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
  }
};
export const unfollow = (userId: number): ThunkType => {//создатель санки
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
  }
};

export default usersReducer;
