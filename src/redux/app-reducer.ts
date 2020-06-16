import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from "./auth-reducer";

let initialState = {
  initialized: false
};

export type InitilStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType) : InitilStateType => {
  switch(action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }

}


export const actions = {
  initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' })
}

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => dispatch(actions.initializedSuccess()));
}

export default appReducer;
