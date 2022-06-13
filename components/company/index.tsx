import react from "react";
import styled from "styled-components";

function Company() {
  return (
    <Container>
      <Wrapper>
        <Header>방문해 주셔서 감사합니다. 대표이사 *** 입니다</Header>
        <Text>
          <p>
            2021년 금속구조물/창호/온실공사업의 사업개시를 목적으로 2020년
            서호건설산업(주)를 설립하게 되었습니다.
          </p>
          <p>기업의 운영방침에 있어서 가장 중요하게 생각하는 점은 신뢰이며,</p>
          <p>
            고객을 만족시킬 수 있다는 고객만족 중심의 가치 경영을 추구할
            것입니다.
          </p>
          <p>
            우리 회사는 일부 주먹구구식으로 운영되는 건설회사와는 달리 수 많은
            관급공사 시공경험을 토대로 건설산업기본법, 시방서 등을 충분히
            파악하고,
          </p>
          <p>
            "책임시공/성실시공"의 마음가짐으로 회사의 구성원과 고객 모두의
            만족할 수 있는 기업이 되고자 합니다.
          </p>
          <p>앞으로도 여러분의 많은 관심과 성원을 부탁드립니다. 감사합니다.</p>
        </Text>
      </Wrapper>
    </Container>
  );
}

export default Company;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  font-size: 2rem;
`;

const Text = styled.div`
  width: 60rem;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  & > p {
    line-height: 2rem;
  }
`;
