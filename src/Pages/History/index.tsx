import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import UsersDropdown from "@components/Business/Users";
import HistoryListing from "./components/Listing";

import { getHistoryByUserId } from "./actions";

import HistoryItemInterface from "@interfaces/history";
import { UserMiniInterface } from "@interfaces/users";
import env from "@configs/env";

import "./styles.scss";

function History() {
  const { t } = useTranslation();
  const [selectedUser, setSelectedUser] = useState<UserMiniInterface | null>(null);
  const [history, setHistory] = useState<Array<HistoryItemInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getHistoryData = async (user: UserMiniInterface, pageNumber: number) => {
    const [data, _] = await getHistoryByUserId(user.id.toString(), pageNumber, env.pageSize);

    if (data) {
      setHistory(data.collection);
      setTotalCount(Number(data.totalCount));
    } else {
      toast.error(t("history.fetch_error_friendly"));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedUser) {
      setIsLoading(true);
      getHistoryData(selectedUser, currentPage);
    } else {
      // reset
      setHistory([]);
      setTotalCount(0);
      setCurrentPage(1);
    }
  }, [selectedUser, currentPage]);

  return (
    <div className="wk-history-page">
      <Helmet>
        <title>{t("history.page_title")}</title>
      </Helmet>
      <div className="wk-history-page__users">
        <UsersDropdown onChange={(value) => setSelectedUser(value)} />
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
