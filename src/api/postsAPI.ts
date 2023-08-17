import axios from "axios";
import { PostType } from "../store/reducers/feedReducer";
import { v1 } from "uuid";

const postsApiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

export const postsAPI = {
  getPosts: () => {
    return postsApiInstance.get("posts");
  },
  addPost: (id: number, userId: number, title: string, body: string) => {
    return postsApiInstance.post("posts", {id, userId, title, body});
  },
};
