import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI, ResultCodesEnum, ResultCodeForCaptcha } from "../api/api";


const   SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any):InitialStateType => {
  switch(action.type) {
    case GET_CAPTCHA_URL_SUCCESS:
    case SET_USER_DATA:
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
type SetAuthUserDataActionPayloadType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA, payload: { userId, login, email, isAuth }
});


type GetCaptchaUrlSuccesActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string} // это {} у которого captchaUrl - строка
}
export const getCaptchaUrlSucces = (captchaUrl: string): GetCaptchaUrlSuccesActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

//thunk
export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.getMe()
    if(meData.resultCode === ResultCodesEnum.Success) {
      let {id, login, email} = meData.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl =  response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logaut = () => async (dispatch: any) => {
  const response = await authAPI.logaut();
  if(response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};


export default authReducer;
