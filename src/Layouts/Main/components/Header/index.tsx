import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <div className="wk-main-layout-header">
      <span>logo</span>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
