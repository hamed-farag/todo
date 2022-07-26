import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import UsersDropdown from "@components/Business/Users";
import HistoryListing from "./components/Listing";

import { getHistoryByUserId } from "./actions";

import HistoryItemInterface from "@interfaces/history";
import env from "@configs/env";

import "./styles.scss";

function History() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<HistoryItemInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getHistoryData = async (userId: string, pageNumber: number) => {
    const [data, _] = await getHistoryByUserId(userId, pageNumber, env.pageSize);

    if (data) {
      setHistory(data.collection);
      setTotalCount(Number(data.totalCount));
    } else {
      toast.error("Cannot Fetch History for the selected User!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUserId) {
      setIsLoading(true);
      getHistoryData(selectedUserId, currentPage);
    } else {
      // reset
      setHistory([]);
      setTotalCount(0);
      setCurrentPage(1);
    }
  }, [selectedUserId, currentPage]);

  return (
    <div className="wk-history-page">
      <div className="wk-history-page__users">
        <UsersDropdown onChange={(userId) => setSelectedUserId(userId)} />
      </div>
      <div className="wk-history-page__content">
        <HistoryListing
          isLoading={isLoading}
          historyItems={history}
          totalCount={totalCount}
          pageSize={env.pageSize}
          actions={{
            getCurrentPage: (value) => {
              setCurrentPage(value);
            },
          }}
        />
      </div>
    </div>
  );
}

export default History;
