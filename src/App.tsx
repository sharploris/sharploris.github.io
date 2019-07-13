import React from 'react';
import './App.scss';
import styles from './App.module.scss';
import Header from './Components/Header';
import PeoplePage from './Components/PeoplePage'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.appBody} centered`}>
        <h2>Met us at Develop:Brighton? Reach out!</h2>
        <br />
        <PeoplePage />
      </div>
    </div>
  );
}

export default App;
