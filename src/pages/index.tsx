import React from 'react';
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import ReversiBoard from 'components/organisms/ReversiBoard';
import styles from '../styles/Home.module.css';

const Home = (): JSX.Element => (
  <>
    <Header />
    <main className={styles.main}>
      <ReversiBoard />
    </main>
    <Footer />
  </>
);

export default Home;
