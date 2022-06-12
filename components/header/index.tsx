import react from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div>logo</div>
      <Nav>
        <div>회사</div>
        <div>회사정보</div>
        <div>제품1</div>
        <div>제품2</div>
        <div>제품3</div>
        <div>제품4</div>
        <div>제품5</div>
        <div>제품6</div>
        <div>제품7</div>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  color: white;
`;
const Nav = styled.div`
  display: flex;
`;
