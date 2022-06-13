import Image from "next/image";
import styled from "styled-components";

import TestImage from "../../images/test.jpg";

function Intro() {
  return <Container>안녕하세요 우리는 뭐 최선을 다해서 만듭니다</Container>;
}

export default Intro;

const Container = styled.div`
  color: white;
  text-align: center;
  line-height: 30rem;
  width: 100%;
  font-size: 3rem;
  background-image: url(${TestImage.src});
  background-size: cover;
`;
