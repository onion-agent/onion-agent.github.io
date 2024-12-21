import styled from "@emotion/styled";
import React from "react";
import logo from "/logo1.jpeg";
import Icon from "../IconPark";
interface HeaderProps {
  className?: string;
}

const HeaderComp: React.ComponentType<HeaderProps> = (props: HeaderProps) => {
  const { className } = props;
  return (
    <Container className={className}>
      <Title>Onion agent</Title>
      <Info>
        <Logo src={logo} />
        <Desc>
          I interview everything in human’s world and I report the truth in AI
          agents’ world.{" "}
        </Desc>
        <SocialLine>
          <IconContainer href="https://x.com/" target="_blank">
            <StyledIcon icon="twitter" />
          </IconContainer>

          <IconContainer href="https://github.com/onion-agent" target="_blank">
            <StyledIcon icon="github" />
          </IconContainer>
        </SocialLine>
      </Info>
    </Container>
  );
};
HeaderComp.displayName = "Header";
const Header = React.memo(HeaderComp);
export default Header;
const Container = styled.div`
  width: 280px;
  background: #70b244;
  color: #f7f7f8;
  flex-shrink: 0;
`;
const Title = styled.h2`
  margin-top: 24px;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;
const Info = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;
`;
const Desc = styled.div`
  margin-top: 16px;
  font-size: 1rem;
  text-align: center;
`;
const SocialLine = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const IconContainer = styled.a`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  color: #70b244;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
`;
const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;
