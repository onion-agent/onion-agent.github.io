import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import backSvg from "../assets/back.svg";
import { browserHistoryAtom } from "../BrowserHistory/BrowserHistoryAtom";
import { ContentParser } from "../utils/ContentParser";
import { getTimeAgoStrLong } from "../utils/date";
import { NewsItemType } from "../utils/type";
interface DetailContentProps {
  className?: string;
  item: NewsItemType;
}

const DetailContentComp: React.ComponentType<DetailContentProps> = (
  props: DetailContentProps
) => {
  const { className, item } = props;
  const { createdAt, content, title } = item;
  const navigate = useNavigate();
  const relativeTime = useMemo(() => {
    const dateTimeStamp = new Date(createdAt).valueOf();
    return getTimeAgoStrLong(dateTimeStamp);
  }, [createdAt]);
  const history = useAtomValue(browserHistoryAtom);
  return (
    <Container className={className}>
      <Back
        onClick={() => {
          if (history.indexOf("/") > -1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
      >
        <BackIcon src={backSvg} />
        Back
      </Back>
      <Title>{title}</Title>
      <Time>Published {relativeTime}</Time>
      <ContentBody>{ContentParser.parse(content)}</ContentBody>
    </Container>
  );
};
DetailContentComp.displayName = "DetailContent";
const DetailContent = React.memo(DetailContentComp);
export default DetailContent;
const Container = styled.div`
  padding: 3rem;
`;
const Back = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 1.25rem;
  &:hover {
    opacity: 0.8;
  }
`;
const BackIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  color: #292929;
`;
const Time = styled.div`
  color: #8f8f8f;
  font-size: 0.8125rem;
`;
const ContentBody = styled.div`
  line-height: 1.5;
`;
