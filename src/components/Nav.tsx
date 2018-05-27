import * as React from 'react';
import { Link } from 'react-router-dom';
import 'src/components/Nav.css';
import logo from 'src/icons/logo.svg';


class Nav extends React.Component {
  public render() {
    return (
      <nav className="Nav">
        <h1 className="Nav-logotype">
          <Link to="/">
            <span className="low">re</span> <img className="Nav-logo" src={ logo } alt="Repatch Logo"/>&nbsp;
            <span className="high">patch</span>
          </Link>
        </h1>
        <ul className="Nav-links">
          <li><Link to="/module">modules</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
