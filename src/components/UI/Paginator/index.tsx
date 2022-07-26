import { useState, useEffect } from "react";
import classNames from "classnames";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import colors from "@configs/colors";

import "./styles.scss";

interface PaginatorProps {
  totalCount: number;
  pageSize: number;
  disabled: boolean;
  onChange: (currentPage: number) => void;
}

function Paginator(props: PaginatorProps) {
  const { totalCount, pageSize, onChange, disabled } = props;

  const [pages, setSPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSPages(Math.round(totalCount / pageSize));
  }, [totalCount]);

  useEffect(() => {
    onChange(currentPage);
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handlePageClick(e: any) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPageItems = () => {
    const numberOfPages = Math.ceil(totalCount / pageSize);
    return new Array(numberOfPages).fill(0).map((_, idx) => idx + 1);
  };

  const className = classNames("wk-paginator", { "wk-paginator--disabled": disabled });
  const prevClassName = classNames("wk-paginator__page-item-prev", { "wk-paginator__page-item-prev--disabled": currentPage === 1 });
  const nextClassName = classNames("wk-paginator__page-item-next", { "wk-paginator__page-item-next--disabled": currentPage === pages });

  return (
    <ul className={className}>
      <li
        className={prevClassName}
        onClick={(e) => {
          disabled === false && currentPage !== 1 && goToPreviousPage();
        }}
      >
        <FaChevronCircleLeft size="30" color={colors.iconColor} />
      </li>

      {getPageItems().map((item) => {
        const className = classNames("wk-paginator__page-item", {
          "wk-paginator__page-item--active": item === currentPage,
        });

        return (
          <li
            className={className}
            key={item}
            onClick={(e) => {
              disabled === false && handlePageClick(e);
            }}
          >
            <span>{item}</span>
          </li>
        );
      })}

      <li
        className={nextClassName}
        onClick={(e) => {
          disabled === false && currentPage !== pages && goToNextPage();
        }}
      >
        <FaChevronCircleRight size="30" color={colors.iconColor} />
      </li>
    </ul>
  );
}

export default Paginator;
