import { AppStateType } from './redux-store';
import { getAuthUserData } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from 'react';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitilStateType = {
  initialized: boolean
}

let initialState: InitilStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any) : InitilStateType => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }

}

type DispatchType = Dispatch<ActionsTypes>
type ActionsTypes = InitializedSuccessActionType

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = () : InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
}

export default appReducer;
