import React from 'react';
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import styles from '../styles/Home.module.css';

const Home = (): JSX.Element => (
  <>
    <Header />
    <main className={styles.main}>Reversi Game</main>
    <Footer />
  </>
);

export default Home;
