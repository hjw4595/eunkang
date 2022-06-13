import react from "react";
import Image from "next/image";
import styled from "styled-components";

import TestImage from "../../images/test.jpg";

const PRODUCT_ITEMS = [
  { id: 1, src: TestImage, discription: "제품 설명1", title: "제품 1" },
  { id: 2, src: TestImage, discription: "제품 설명1", title: "제품 2" },
  { id: 3, src: TestImage, discription: "제품 설명1", title: "제품 3" },
  { id: 4, src: TestImage, discription: "제품 설명1", title: "제품 4" },
  { id: 5, src: TestImage, discription: "제품 설명1", title: "제품 5" },
  { id: 6, src: TestImage, discription: "제품 설명1", title: "제품 6" },
];

function Products() {
  return (
    <div>
      {PRODUCT_ITEMS.map((item) => (
        <Card key={item.id}>
          <Image src={item.src} width="400" height="300" />
          <Contents>
            <Title>{item.title}</Title>
            <Discription>{item.discription}</Discription>
          </Contents>
        </Card>
      ))}
    </div>
  );
}

export default Products;

const Card = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Contents = styled.div`
  padding: 2rem 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Discription = styled.div``;
