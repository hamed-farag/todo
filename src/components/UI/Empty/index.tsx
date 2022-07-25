interface EmptyProps {
  title: string;
  icon: JSX.Element;
}

import "./styles.scss";

function Empty(props: EmptyProps) {
  const { title, icon } = props;

  return (
    <div className="wk-empty">
      <div className="wk-empty__icon">{icon}</div>
      <div className="wk-empty__title">{title}</div>
    </div>
  );
}

export default Empty;
