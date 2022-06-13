import type { NextPage } from "next";
import styled from "styled-components";

import Company from "../components/company";
import History from "../components/history";
import Products from "../components/products";
import HeaderContents from "../components/header";

const CompanyPage: NextPage = () => {
  return (
    <Container>
      <Company />
      <History />
    </Container>
  );
};

export default CompanyPage;

const Container = styled.div``;
