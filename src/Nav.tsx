import * as React from 'react';
import logo from './logo.svg';
import './Nav.css';


class Nav extends React.Component {
  public render() {
    return (
      <nav className="Nav">
        <h1 className="Nav-logotype">
          <span className="low">re</span> <img className="Nav-logo" src={ logo } alt="Repatch Logo"/>&nbsp;
          <span className="high">patch</span>
        </h1>
        <ul className="Nav-links">
          <li/>
        </ul>
      </nav>
    );
  }
}

export default Nav;
