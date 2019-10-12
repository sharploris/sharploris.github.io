import React, { Component } from "react";
import Profile from '../Profile';
import styles from './index.module.scss';

export default class PeoplePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.profileWrapper}>
          <Profile
            personName="Daniel Williams"
            twitterUrl="https://twitter.com/DanielW094"
            linkedinUrl="https://www.linkedin.com/in/daniel-williams-4295b8a8"
            githubUrl="https://github.com/DanielW093"
            contactEmail="contact@sharploris.net"
          />
          <h4>Programmer on <a href="https://twitter.com/Oiseaudev" target="_blank" rel="noopener noreferrer">Oiseau</a></h4>
          <h4>Developer of the Loris Settings Manager editor extension for Unity3D</h4>
          <p>
            <a href="https://sharploris.net/LorisSettingsManager" target="_blank" rel="noopener noreferrer">
              Find the documentation here
            </a>
            &nbsp;and the&nbsp;
            <a href="https://assetstore.unity.com/packages/tools/utilities/loris-settings-manager-139326" target="_blank" rel="noopener noreferrer">
              asset store page here.
            </a>
          </p>
          <h4>Software Engineer at <a href="https://www.madetech.com/" target="_blank" rel="noopener noreferrer">Made Tech</a></h4>
        </div>
        <br />
        <br />
        <div className={styles.profileWrapper}>
          <Profile
            personName="Jess Molloy"
            twitterUrl="https://twitter.com/jessabellerina"
            linkedinUrl="https://www.linkedin.com/in/jessmolloyga/"
            contactEmail="jessmolloyga@gmail.com"
          />
          <h4>Design, accessibility and 3D art on <a href="https://twitter.com/Oiseaudev" target="_blank" rel="noopener noreferrer">Oiseau</a></h4>
          <h4>Developer of <a href="https://jessmolloyga.wixsite.com/jessmolloy" target="_blank" rel="noopener noreferrer">The Green Monster</a> mod for Fallout 4</h4>
          <h4>Games Development (Design) Masters Student at Kingston University</h4>
        </div>
        <br />
        <br />
        <div className={styles.profileWrapper}>
          <Profile
            personName="Thomas Bassett"
            githubUrl="https://github.com/snoogle13"
            linkedinUrl="https://www.linkedin.com/in/thomas-bassett-b08304112/"
            contactEmail="thomasbassett94@gmail.com"
          />
          <h4>Programmer on <a href="https://twitter.com/Oiseaudev" target="_blank" rel="noopener noreferrer">Oiseau</a></h4>
          <h4>Studied Computer Science (Games Programming) at Kingston University</h4>
        </div>
      </div>
    );
  }
}