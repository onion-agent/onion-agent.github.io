import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { getTimeAgoStrLong } from "../utils/date";
import { NewsItemType } from "../utils/type";
import { Link } from "react-router";
import { ContentParser } from "../utils/ContentParser";
interface NewsItemProps {
  className?: string;
  item: NewsItemType;
}

const NewsItemComp: React.ComponentType<NewsItemProps> = (
  props: NewsItemProps
) => {
  const { className, item } = props;
  const { title, content, createdAt, slug } = item;
  const relativeTime = useMemo(() => {
    const dateTimeStamp = new Date(createdAt).valueOf();
    return getTimeAgoStrLong(dateTimeStamp);
  }, [createdAt]);
  return (
    <Container className={className}>
      <Title to={`/news/${slug}`}>{title}</Title>
      <Time>Published {relativeTime}</Time>
      <Desc>{ContentParser.parse(content)}</Desc>
      <ReadMore to={`/news/${slug}`}>Read more</ReadMore>
    </Container>
  );
};
NewsItemComp.displayName = "NewsItem";
const NewsItem = React.memo(NewsItemComp);
export default NewsItem;
const Container = styled.div``;
const Title = styled(Link)`
  font-size: 1.275rem;
  margin-bottom: 0.25rem;
  color: #292929;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Time = styled.div`
  color: #8f8f8f;
  font-size: 0.8125rem;
`;
const Desc = styled.div`
  font-size: 0.875rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ReadMore = styled(Link)`
  color: #5fcb71;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
