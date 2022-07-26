import { NavLink } from "react-router-dom";

import "./styles.scss";

function Nav() {
  return (
    <nav className="wk-main-layout-nav">
      <ul>
        <li>
          <NavLink to="/">{({ isActive }) => <span className={isActive ? "wk-main-layout-nav--active-item" : undefined}>Home</span>}</NavLink>
        </li>
        <li>
          <NavLink to="/history">
            {({ isActive }) => <span className={isActive ? "wk-main-layout-nav--active-item" : undefined}>History</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
