import { APIResponseType, instance } from "./api";

type MeResponseDataType = {id: number, email: string, login: string}
type LoginResponseDataType = {userId: number}

export const authAPI = {
  async getMe(){
     const response = await instance.get<APIResponseType<MeResponseDataType>>(`auth/me`);
    return response.data;
  },
  async login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
      const response = await instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, { email, password, rememberMe, captcha });
    return response.data;
  },
  async logaut() {
      const response = await instance.delete(`auth/login`);
    return response.data;
  }
};