import React, { useState, useEffect, useCallback } from "react";
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
    return new Array(pages).fill(0).map((_, idx) => idx + 1);

    // const start = Math.floor((currentPage - 1) / pageSize) * pageSize;
    // return new Array(pageSize).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <button disabled={disabled} type="button" onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
        prev
      </button>

      {getPageItems().map((item) => (
        <button disabled={disabled} type="button" key={item} onClick={handlePageClick} className={`item ${currentPage === item ? "active" : null}`}>
          <span>{item}</span>
        </button>
      ))}

      <button disabled={disabled} type="button" onClick={goToNextPage} className={`next ${currentPage === pages ? "disabled" : ""}`}>
        next
      </button>
    </div>
  );
}

export default Paginator;
