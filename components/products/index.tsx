import react from "react";
import Image from "next/image";
import styled from "styled-components";

import TestImage from "../../images/test.jpg";

const LAMP = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
];

const RECYCLE = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
];

const TOPLIGHT = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
];

const BICYCLE = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
];

const ETC = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
];

function Products() {
  return (
    <Wrapper>
      {LAMP.map((item) => (
        <Card key={item.id}>
          <Image src={item.src} width="200" height="150" />
          <Contents>
            <Title>{item.title}</Title>
            <Discription>{item.discription}</Discription>
          </Contents>
        </Card>
      ))}
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin: 0 1rem;
  }
`;

const Card = styled.div``;

const Contents = styled.div`
  padding: 2rem 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Discription = styled.div``;
