import classNames from "classnames";

import HistoryItemInterface from "@interfaces/history";

import { transformHistoryItem } from "./mapper";

import "./styles.scss";

interface HistoryCardProps {
  data: HistoryItemInterface;
}

function HistoryCard(props: HistoryCardProps) {
  const { data } = props;

  const transformedItem = transformHistoryItem(data);

  const className = classNames("wk-history-card", { [`wk-history-card--${transformedItem.actionType}`]: transformedItem.actionType });

  return (
    <div className={className}>
      <span>{transformedItem.message}</span>
      <span>{transformedItem.relativeTime}</span>
    </div>
  );
}

export default HistoryCard;
