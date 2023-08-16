import axios from "axios";

const socialMediaInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const authApi = {
  //получение данных о статусе пользователя
  me: () => {
    return socialMediaInstance.get("auth/me")
  },
  login: (data: LoginDataType) => {
    return socialMediaInstance.post("auth/login", {...data})
  }
}

export const socialMediaAPI = {

  //user calls
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
  },

  //profile calls
  getUserProfile: (userId: number) => {
    return socialMediaInstance.get(`profile/${userId}`)
  },
  getUserStatus: (userId: number) => {
    return socialMediaInstance.get(`profile/status/${userId}`)
  }
};


export type LoginDataType = {
  email: string,
  password: string,
  rememberMe?: boolean,
  captcha?: boolean
}
//TODO: типизация
