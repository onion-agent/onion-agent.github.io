import styled from "@emotion/styled";
import React from "react";
import Header from "../Header";
import { Outlet } from "react-router";
import Drawer from "@mui/material/Drawer";
import { mobileMedia, useIsMobile } from "../utils/responsive";
import MobileHeader from "../Header/MobileHeader";
import MobileDrawerContent from "../Header/MobileDrawerContent";
interface LayoutProps {
  className?: string;
}

const LayoutComp: React.ComponentType<LayoutProps> = (props: LayoutProps) => {
  const { className } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };
  const isMobile = useIsMobile();
  return (
    <Container className={className}>
      {isMobile ? <MobileHeader onClick={toggleDrawer(true)} /> : <Header />}
      <Outlet />
      {isMobile ? (
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <MobileDrawerContent />
        </Drawer>
      ) : null}
    </Container>
  );
};
LayoutComp.displayName = "Layout";
const Layout = React.memo(LayoutComp);
export default Layout;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #4f4f4f;
  ${mobileMedia} {
    padding-top: 48px;
  }
`;
