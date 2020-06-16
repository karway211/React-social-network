import { stopSubmit, FormAction } from 'redux-form';
import { ResultCodesEnum, ResultCodeForCaptcha } from "../api/api";
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
  switch(action.type) {
    case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
    case 'SN/auth/SET_USER_DATA':
      return {
        userId : 'rhrthrht',
        ...state,
        ...action.payload
      }
    default:
      return state;
  }

}

//ac
export const actions = {
  setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SN/auth/SET_USER_DATA', payload: { userId, login, email, isAuth }
  } as const),
  getCaptchaUrlSucces: (captchaUrl: string) => ({type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}

//thunk
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.getMe()
    if(meData.resultCode === ResultCodesEnum.Success) {
      let {id, login, email} = meData.data;
      dispatch(actions.setAuthUserData(id, login, email, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha);
  if(loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if(loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired){
      dispatch(getCaptchaUrl());
    }
    const message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error';
    dispatch(stopSubmit('contact', {_error: message}))
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl =  data.url;
  dispatch(actions.getCaptchaUrlSucces(captchaUrl));
};

export const logaut = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logaut();
  if(data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};


export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
