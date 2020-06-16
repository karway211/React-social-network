import { AppStateType, InferActionsTypes, BaseThunkType } from './redux-store';
import { PhotosType, UserType } from './../types/types';
import { updateObjectInArray } from "../utils/object-helpers";
import { Dispatch } from 'react';
import { usersAPI } from '../api/users-api';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // Array of users Id
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
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
    case 'SN/USERS/UNFOLLOW':
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
    case 'SN/USERS/SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SN/USERS/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'SN/USERS/TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
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

export const actions = {
  followSuccess: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const)
}


//thunk

export const requestUsers = (page = 1,  //создатель санки
  pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));//диспатчим экшен-крейтер
    dispatch(actions.setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false)); //диспатчим экшен-крейтер
    dispatch(actions.setUsers(data.items));//диспатчим экшен-крейтер
    dispatch(actions.setTotalUsersCount(data.totalCount));//диспатчим экшен-крейтер
  }
};

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {//создатель санки
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
  }
};
export const unfollow = (userId: number): ThunkType => {//создатель санки
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
  }
};

export default usersReducer;

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
