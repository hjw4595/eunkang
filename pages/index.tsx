import type { NextPage } from "next";
import styled from "styled-components";

import Company from "../components/company";
import History from "../components/history";
import Products from "../components/products";
import HeaderContents from "../components/header";

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <HeaderContents />
      </Header>

      <Contents>
        <Intro>
          <Company />
          <History />
        </Intro>
        <Products />
      </Contents>

      <Footer>회사정보</Footer>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 4rem;
  border-top: 1px solid #eaeaea;
  background-color: #203239;
  z-index: 999;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeedde;
`;

const Footer = styled.div`
  display: flex;
  height: 8rem;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eaeaea;
  background-color: #203239;
`;

const Intro = styled.div`
  display: flex;
`;
