import react, { useRef, useState } from "react";
import styled from "styled-components";

import { useScroll } from "../../hooks/scroll";

function Header() {
  const valueY = useScroll();
  const onClick = () => {
    console.log(valueY);
  };

  return (
    <Container>
      <div>logo</div>
      <Nav>
        <div onClick={onClick}>회사</div>
        <div>회사정보</div>
        <div>제품1</div>
        <div>제품2</div>
        <div>제품3</div>
        <div>제품4</div>
        <div>제품5</div>
        <div>제품6</div>
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
  color: white;
`;
const Nav = styled.div`
  display: flex;
  & > div {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
