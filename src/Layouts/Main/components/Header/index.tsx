import Nav from "../Nav";

import "./styles.scss";

function Header() {
  return (
    <div className="wk-main-layout-header">
      <img className="wk-main-layout-header__logo" src="/assets/images/app-icon.png" alt="logo" />
      <Nav />
    </div>
  );
}

export default Header;
