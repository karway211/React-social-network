import { PostType, ProfileType, PhotosType } from './../types/types';
import { stopSubmit, FormAction } from "redux-form";
import { profileAPI } from '../api/profile-api';
import { InferActionsTypes, BaseThunkType } from './redux-store';

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

const profileReducer = (state = initialState, action: ActionsType):InitialStateType => {
  switch(action.type) {
    case 'SN/PROFILE/ADD-POST': {
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
    case 'SN/PROFILE/SET-USER-PROFILE': {
      return {
        ...state,
        profile: action.profile
      };
    }
    case 'SN/PROFILE/SET_STATUS': {
      return {
        ...state,
        status: action.status
      };
    }
    case 'SN/PROFILE/DELETE_POST': {
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id !== action.postId)]
      };
    }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
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

export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET-USER-PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
  deletePostAC: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}



//thunk
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  } catch(error) {
    return;
  }
};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
  } catch(error) {
    return;
  }
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if(data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  } catch(error) {
    return;
  }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if(data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if(data.resultCode === 0) {
    if (userId) {
      dispatch(getUserProfile(userId))
    } else {
      throw new Error('userId can not be null');
    }    
  } else {
    dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
    return Promise.reject(data.messages[0]);
  }
};



export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
