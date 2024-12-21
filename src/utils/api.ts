import { NewsItemType } from "./type";

const API_HOST = "http://localhost:4001";

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
