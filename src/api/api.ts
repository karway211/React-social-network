import Axios from "axios";
import { ProfileType } from "../types/types";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f9529b93-30b8-4394-b072-ee0546f292c2"
    }
});


export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async unfollow(id: number) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    },
    async follow(id: number) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
        // return instance.get(`profile/${userId}`)
    }
};
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
};

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {id: number, email: string, login: string}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodeForCaptcha | ResultCodesEnum
    messages: Array<string>
}

export const authAPI = {
    getMe(){
       return instance.get<MeResponseType>(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => response.data);
    },
    logaut() {
        return instance.delete(`auth/login`);
    }
};
export const securityAPI = {
    getCaptchaUrl(){
       return instance.get(`security/get-captcha-url`);
    }
};
