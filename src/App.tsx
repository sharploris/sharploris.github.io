import React from 'react';
import './App.scss';
import styles from './App.module.scss';
import Header from './Components/Header';
import PeoplePage from './Components/PeoplePage';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.appBody} centered`}>
        <h2>Met us at Develop:Brighton? Reach out!</h2>
        <br />
        <PeoplePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
