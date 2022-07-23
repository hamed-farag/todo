import { Link } from "react-router-dom";

import "./styles.scss";

function Nav() {
  return (
    <nav className="wk-main-layout-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
