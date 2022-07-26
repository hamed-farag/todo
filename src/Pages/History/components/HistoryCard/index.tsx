import HistoryItemInterface from "@interfaces/history";

interface HistoryCardProps {
  data: HistoryItemInterface;
}

function HistoryCard(props: HistoryCardProps) {
  const { data } = props;
  return <span>{"Card"}</span>;
}

export default HistoryCard;
