import { UserType } from './../types/types';
import Axios from "axios";

export const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f9529b93-30b8-4394-b072-ee0546f292c2"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum | ResultCodeForCaptcha> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
