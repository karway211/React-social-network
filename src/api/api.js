import Axios from "axios"

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
    async unfollow(id) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    },
    async follow(id) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
        // return instance.get(`profile/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    // async getMe() {
    //     const response = await instance.get(`auth/me`);
    //     return response.data;
    // },
    getMe(){
       return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logaut() {
        return instance.delete(`auth/login`);
    }
}
