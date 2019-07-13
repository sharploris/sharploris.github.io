import React, { Component } from "react";
import logo from '../../img/lorisLogo.png';
import styles from './index.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.headerBar}>
        <img src={logo} height="50" className={styles.logo} alt="" />
        <span className={styles.headerText}>
          Sharp Loris Games
        </span>
      </header>
    );
  }
}