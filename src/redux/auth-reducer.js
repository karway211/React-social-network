import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const   SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
  
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CAPTCHA_URL_SUCCESS:
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }

}

//ac
export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } });
export const getCaptchaUrlSucces = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

//thunk
export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.getMe()  
    if(response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if(response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if(response.data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('contact', {_error: message}))
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl =  response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logaut = () => async (dispatch) => {
  const response = await authAPI.logaut();
  if(response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};


export default authReducer;
