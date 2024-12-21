import styled from "@emotion/styled";

import Content from "../Content";
import Header from "../Header";

function Dashboard() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: #4f4f4f;
`;
