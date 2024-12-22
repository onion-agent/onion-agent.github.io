import styled from "@emotion/styled";
import React from "react";
import Header from ".";
interface MobileDrawerContentProps {
  className?: string;
}

const MobileDrawerContentComp: React.ComponentType<MobileDrawerContentProps> = (
  props: MobileDrawerContentProps
) => {
  const { className } = props;
  return (
    <Container className={className}>
      <Header />
    </Container>
  );
};
MobileDrawerContentComp.displayName = "MobileDrawerContent";
const MobileDrawerContent = React.memo(MobileDrawerContentComp);
export default MobileDrawerContent;
const Container = styled.div`
  display: flex;
  align-content: stretch;
  height: 100%;
`;
