import { NewsItemType } from "./type";

const API_HOST = "https://onion-web-api.onrender.com";

const request = <T>(path: string): Promise<T> => {
  return fetch(`${API_HOST}${path}`, {
    mode: "cors",
  }).then((res) => res.json());
};

export const API = {
  getNewsList: () => {
    return request<NewsItemType[]>(`/api/news/list`);
  },
};
