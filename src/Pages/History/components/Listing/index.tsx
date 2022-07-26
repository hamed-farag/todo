import { FaList } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Paginator from "@components/UI/Paginator";
import Empty from "@components/UI/Empty";
import Spinner from "@components/UI/Spinner";

import HistoryCard from "../HistoryCard";

import HistoryItemInterface from "@interfaces/history";

import colors from "@configs/colors";

import "./styles.scss";

interface HistoryListingProps {
  isLoading: boolean;
  historyItems: Array<HistoryItemInterface>;
  totalCount: number;
  pageSize: number;
  actions: {
    getCurrentPage: (value: number) => void;
  };
}

function HistoryListing(props: HistoryListingProps) {
  const { t } = useTranslation();

  const { isLoading, historyItems, totalCount, pageSize, actions } = props;
  const { getCurrentPage } = actions;

  const renderHistory = () => {
    const historyExtraction = historyItems.map((item: HistoryItemInterface) => {
      return <HistoryCard key={item.id} data={item} />;
    });

    return historyExtraction;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="wk-history-list__loading">
          <Spinner size="big" />
        </div>
      );
    }

    if (!isLoading && historyItems.length === 0) {
      return (
        <div className="wk-history-list__empty">
          <Empty icon={<FaList size="80" color={colors.iconColor} />} title={t("history.empty_history")} />
        </div>
      );
    }

    return renderHistory();
  };

  return (
    <div className="wk-history-list">
      <div className="wk-history-list__content">{renderContent()}</div>
      {totalCount > historyItems.length && (
        <div className="wk-history-list__footer">
          <Paginator
            totalCount={totalCount}
            disabled={false}
            pageSize={pageSize}
            onChange={(selectedPage) => {
              getCurrentPage(selectedPage);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default HistoryListing;
