import Header from "./components/Header";

import "./styles.scss";

interface MainLayoutProps {
  children: JSX.Element;
}

function Main(props: MainLayoutProps) {
  const { children } = props;
  return (
    <div className="wk-main-layout">
      <Header />
      <div className="wk-main-layout__body">{children}</div>
    </div>
  );
}

export default Main;
