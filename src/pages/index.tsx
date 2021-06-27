import styles from '../styles/Home.module.css';
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>Reversi Game</main>
      <Footer />
    </>
  );
};
export default Home;
