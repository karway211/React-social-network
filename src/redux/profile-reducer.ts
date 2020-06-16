import { PostType, ProfileType, PhotosType } from './../types/types';
import { stopSubmit } from "redux-form";
import { profileAPI } from '../api/profile-api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  
  posts: [
    // {id: 1, message: 'Hi! How are you?', likesCount: 15},
    // {id: 2, message: 'I am fine!', likesCount: 25},
    // {id: 3, message: 'Bla-bla!', likesCount: 12},
    // {id: 4, message: 'Da-da!', likesCount: 27}
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',

};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any):InitialStateType => {
  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id !== action.postId)]
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos} as ProfileType
      };
    }
    default:
      return state;
  }

}
//AC
type AddPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type DeletePostACActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePostAC = (postId: number): DeletePostACActionType => ({type: DELETE_POST, postId});
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

//thunk
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  try {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  } catch(error) {
    return;
  }
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  try {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
  } catch(error) {
    return;
  }
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if(data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch(error) {
    return;
  }
};
export const savePhoto = (title: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(title);
  if(data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if(data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
    return Promise.reject(data.messages[0]);
  }
};



export default profileReducer;
