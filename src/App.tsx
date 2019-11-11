import React from 'react';
import './App.scss';
import styles from './App.module.scss';
import Header from './Components/Header';
import PeoplePage from './Components/PeoplePage';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={`${styles.appBody} centered`}>
        <h2>About Us</h2>
        <br />
        <PeoplePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
