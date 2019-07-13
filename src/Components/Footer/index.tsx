import React, { Component } from "react";
import styles from './index.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerBar}>
        <div className={styles.footerText}>
          © Copyright - Sharp Loris Games 2019
        </div>
      </footer>
    );
  }
}