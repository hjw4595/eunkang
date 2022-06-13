import react from "react";
import Image from "next/image";
import styled from "styled-components";

const CATEGORY_LIST = [
  { id: 1, name: "주차 램프" },
  { id: 2, name: "재활용 보관소" },
  { id: 3, name: "자전거 보관소" },
  { id: 4, name: "탑 라이트" },
  { id: 5, name: "방음벽" },
  { id: 6, name: "기타" },
];

interface PropTypes {
  selected?: string;
}

function Category({ selected }: PropTypes) {
  return (
    <Wrapper>
      {CATEGORY_LIST.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Wrapper>
  );
}

export default Category;

const Wrapper = styled.div`
  width: 12rem;
  text-align: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  & > div {
    line-height: 4rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    background-color: #e0ddaa;
  }
`;
