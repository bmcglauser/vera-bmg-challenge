import React, { FunctionComponent } from 'react';
import './Header.scss';
import horizRed from '../../assets/logos/horiz/Vera_Hor_Red.svg';

const Header: FunctionComponent = () => {
  return (
    <div className="header-wrapper">
      <a href="http://www.vera.org/" className="logo-link">
        <img src={horizRed} alt="Vera Institute of Justice" />
      </a>
      <ul>
        <li>
          <a href="https://www.vera.org/issues">Issues</a>
        </li>
        <li>
          <a href="https://www.vera.org/projects">Projects</a>
        </li>
        <li>
          <a href="https://www.vera.org/about">About</a>
        </li>
        <li>
          <a href="https://www.vera.org/blog">Blog</a>
        </li>
        <li className="donate">
          <a href="https://www.vera.org/donate">Donate</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
