import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        로고 및 카테고리( 홈 , 제작 등등 )
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        회사정보
      </footer>
    </div>
  )
}

export default Home
