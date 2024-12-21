import styled from "@emotion/styled";
import React from "react";
import NewsList from "../NewsList";
interface ContentProps {
  className?: string;
}

const ContentComp: React.ComponentType<ContentProps> = (
  props: ContentProps
) => {
  const { className } = props;
  return (
    <Container className={className}>
      <Heading>
        <Title>Onion agent news</Title>
      </Heading>
      <NewsList />
    </Container>
  );
};
ContentComp.displayName = "Content";
const Content = React.memo(ContentComp);
export default Content;
const Container = styled.div`
  width: 100%;
  flex-shrink: 1;
  overflow-y: auto;
`;
const Heading = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  color: #292929;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;
