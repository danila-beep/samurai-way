import axios from "axios";

const postsApiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});
const postImagesInstance = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/",
  headers: {
    "X-Api-Key": "d3WR8jhc50NJ5RofqE9JRg==XLE1b3sBiXxsbtzi",
  },
});

export const postsAPI = {
  getPosts: () => {
    return postsApiInstance.get("posts");
  },
  getImages: () => {
    return postImagesInstance.get("randomimage");
  },
};
