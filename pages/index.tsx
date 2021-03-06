import type { NextPage } from "next";
import styled from "styled-components";

import Products from "../components/products";
import HeaderContents from "../components/header";
import Category from "../components/category";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <HeaderContents />
      </Header>

      <Contents>
        <Intro />
        <ProductsWrapper>
          <Category />
          <Products />
        </ProductsWrapper>
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
  height: calc(100vh - 12.2rem);
  flex-direction: column;
  align-items: center;
  background-color: #eeedde;
  & > :first-child {
    margin-bottom: 2rem;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  height: 8rem;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eaeaea;
  background-color: #203239;
`;
