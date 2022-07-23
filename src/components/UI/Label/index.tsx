interface LabelProps {
  text: string;
}

function Label(props: LabelProps) {
  const { text } = props;

  return <span>{text}</span>;
}

export default Label;
