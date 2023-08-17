import React, { FC } from "react";

import PaginationButton from "~/components/atoms/PaginationButton";

import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<IPagination> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleFirstPageClick = () => {
    onPageChange(1);
  };

  const handleLastPageClick = () => {
    onPageChange(totalPages);
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleGoToPage = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxVisibleButtons = 3;

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PaginationButton
          key={i}
          className={`${i === currentPage ? "bg-red-650" : ""}`}
          handleClick={() => handleGoToPage(i)}
        >
          {i}
        </PaginationButton>
      );
    }

    if (endPage < totalPages - 1) {
      pageButtons.push(<span key="ellipsis">...</span>);
    }

    if (endPage < totalPages) {
      pageButtons.push(
        <PaginationButton
          key={totalPages}
          handleClick={() => handleGoToPage(totalPages)}
        >
          {totalPages}
        </PaginationButton>
      );
    }

    return pageButtons;
  };

  return (
    <div className="text-white flex items-center gap-2">
      <PaginationButton
        isDisabled={currentPage === 1 ? true : false}
        handleClick={handleFirstPageClick}
      >
        <ChevronDoubleLeftIcon className="w-4 h-4" />
      </PaginationButton>

      <PaginationButton
        isDisabled={currentPage === 1 ? true : false}
        handleClick={handlePrevPageClick}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </PaginationButton>

      {renderPageButtons()}

      <PaginationButton
        isDisabled={currentPage === totalPages ? true : false}
        handleClick={handleNextPageClick}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </PaginationButton>

      <PaginationButton
        isDisabled={currentPage === totalPages ? true : false}
        handleClick={handleLastPageClick}
      >
        <ChevronDoubleRightIcon className="w-4 h-4" />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
