import { useAtomValue } from "jotai";
import React from "react";
import { useParams } from "react-router";
import { newsListAtom } from "../NewsList/NewAtom";
import DetailContent from "./Content";
interface NewsDetailProps {
  className?: string;
}

const NewsDetailComp: React.ComponentType<NewsDetailProps> = (
  props: NewsDetailProps
) => {
  const { className } = props;
  const param = useParams();
  const { slug } = param;
  const newsList = useAtomValue(newsListAtom);
  const newsItem = newsList.find((item) => item.slug === slug);
  return newsItem ? (
    <DetailContent item={newsItem} className={className} />
  ) : null;
};
NewsDetailComp.displayName = "NewsDetail";
const NewsDetail = React.memo(NewsDetailComp);
export default NewsDetail;
