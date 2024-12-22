import styled from "@emotion/styled";
import React from "react";
import Icon from "../IconPark";
interface MobileHeaderProps {
  className?: string;
  onClick?: () => void;
}

const MobileHeaderComp: React.ComponentType<MobileHeaderProps> = (
  props: MobileHeaderProps
) => {
  const { className, onClick } = props;
  return (
    <Container className={className}>
      <StyledIcon icon="menu" onClick={onClick} />
    </Container>
  );
};
MobileHeaderComp.displayName = "MobileHeader";
const MobileHeader = React.memo(MobileHeaderComp);
export default MobileHeader;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 12px 20px;
  background: #70b244;
  color: #f7f7f8;
`;
const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
