import HistoryItemInterface from "@interfaces/history";

import { transformHistoryItem } from "./mapper";

import "./styles.scss";

interface HistoryCardProps {
  data: HistoryItemInterface;
}

function HistoryCard(props: HistoryCardProps) {
  const { data } = props;

  const d = transformHistoryItem(data);
  return (
    <div>
      <span>{d.message}</span>
      <span>{d.relativeTime}</span>
    </div>
  );
}

export default HistoryCard;
