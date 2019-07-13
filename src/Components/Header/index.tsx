import React, { Component } from "react";
import logo from '../../img/lorisLogo.png';
import './index.scss';

export default class Header extends Component {
    render() {
      return (
        <header className="header-bar">
            <img src={logo} height="50" className="logo" />
            <span className="header-text">
                Sharp Loris Games
            </span>
        </header>
      );
    }
  }