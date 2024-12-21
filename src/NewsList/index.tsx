import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import React from "react";
import { newsListAtom } from "./NewAtom";
import NewsItem from "./NewsItem";
interface NewsListProps {
  className?: string;
}

const NewsListComp: React.ComponentType<NewsListProps> = (
  props: NewsListProps
) => {
  const { className } = props;
  const newsList = useAtomValue(newsListAtom);
  return (
    <Container className={className}>
      {newsList.map((newsItem, idx) => (
        <NewsItem key={idx} item={newsItem} />
      ))}
    </Container>
  );
};
NewsListComp.displayName = "NewsList";
const NewsList = React.memo(NewsListComp);
export default NewsList;
const Container = styled.div`

  padding: 48px;
  gap: 48px;
  display: flex;
  flex-direction: column;
`;
