import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles.scss";

function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="wk-main-layout-nav">
      <ul>
        <li>
          <NavLink to="/">
            {({ isActive }) => <span className={isActive ? "wk-main-layout-nav--active-item" : undefined}>{t("nav.home")}</span>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/history">
            {({ isActive }) => <span className={isActive ? "wk-main-layout-nav--active-item" : undefined}>{t("nav.history")}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
