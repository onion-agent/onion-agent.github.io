import { atom } from "jotai";
import { NewsItemType } from "../utils/type";

export const newsListAtom = atom<NewsItemType[]>([]);
