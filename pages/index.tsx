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
        <Company />
        <History />
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
  justify-content: center;
  align-items: center;
  background-color: #141e27;
`;

const Contents = styled.div`
  min-height: calc(100vh - 12rem);
  display: flex;
  padding: 4rem 0;
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
  background-color: #141e27;
`;
