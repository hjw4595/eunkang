import Link from "next/link";
import react, { useRef, useState } from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div>logo</div>
      <Nav>
        <div>
          <Link href="/company">회사소개</Link>
        </div>
        <div>홈</div>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
const Nav = styled.div`
  display: flex;
  & > div {
    margin-right: 1rem;
    cursor: pointer;
    color: white;
    & > a {
      color: white;
      text-decoration: none;
    }
  }
`;
