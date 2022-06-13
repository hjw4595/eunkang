import react from "react";
import styled from "styled-components";

function History() {
  return (
    <Container>
      <Wrapper>
        <Cartegory>회사 연혁</Cartegory>
        <List>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명내용설명내용설명내용설명내용설명내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명내용설명내용설명내용설명내용설명내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명내용설명내용설명</p>
          </Item>
          <Item>
            <Time>2021. 01</Time>
            <p>내용설명내용설명내용설명내용설명내용설명내용설명내용설명</p>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
}

export default History;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  padding: 3rem 0;
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

const Cartegory = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Time = styled.div`
  color: #2a2839;
  font-size: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding-bottom: 1.5rem;
  border-left: 1px solid black;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  &:last-child {
    border: 0px;
    padding-bottom: 0;
  }
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid black;
    box-shadow: 3px 3px 0px gray;
    box-shadow: 3px 3px 0px gray;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 0px;
  }
`;
