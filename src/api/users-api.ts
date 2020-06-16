import { instance, GetItemsType, APIResponseType } from "./api";
import { profileAPI } from "./profile-api";

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
      const response = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`);
      return response.data;
  },
  async unfollow(id: number) {
      const response = await instance.delete(`follow/${id}`);
      return response.data as Promise<APIResponseType>;
  },
  async follow(id: number) {
      const response = await instance.post<APIResponseType>(`follow/${id}`);
      return response.data;
  }
};
