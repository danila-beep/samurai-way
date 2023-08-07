import axios from "axios";

const socialMediaInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const socialMediaAPI = {
  getUsers: (currentPage?: number, pageSize?: number) => {
    if (currentPage && pageSize) {
      return socialMediaInstance.get(
        `users?page=${currentPage}&count=${pageSize}`
      );
    } else {
      return socialMediaInstance.get("users");
    }
  },
  followUser: (userId: number) => {
    return socialMediaInstance.post(`follow/${userId}`)
  },
  unfollowUser: (userId: number) => {
    return socialMediaInstance.delete(`follow/${userId}`)
  }
};

export type UsersResponseType = {};
