import styled from "@emotion/styled";
import React from "react";
import { useParams } from "react-router";
import { newsListAtom } from "../NewsList/NewAtom";
import { useAtomValue } from "jotai";
import Header from "../Header";
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
  return (
    <Container className={className}>
      <Header />
      {newsItem ? <DetailContent item={newsItem} /> : null}
    </Container>
  );
};
NewsDetailComp.displayName = "NewsDetail";
const NewsDetail = React.memo(NewsDetailComp);
export default NewsDetail;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #4f4f4f;
`;
