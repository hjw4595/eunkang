import type { NextPage } from 'next'
import styled from "styled-components";

import Company from '../components/company'
import History from '../components/history'
import Products from '../components/products'


const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        로고 및 카테고리( 홈 , 회사정보 등등 )
      </Header>

      <Contents>
        <Company />
        <History />
        <Products />
      </Contents>

      <Footer>
        회사정보
      </Footer>
    </Container>
  )
}

export default Home

const Container = styled.div`
`

const Header = styled.div`
`

const Contents = styled.div`
`

const Footer = styled.div `
`;




