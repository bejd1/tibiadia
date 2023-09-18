import { useState } from "react";

interface PaginationData<T> {
  next: () => void;
  prev: () => void;
  jump: (page: number) => void;
  currentData: () => T[];
  currentPage: number;
  maxPage: number;
}

function usePagination<T>(data: T[], itemsPerPage: number): PaginationData<T> {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage: number = Math.ceil(data.length / itemsPerPage);

  function currentData(): T[] {
    const begin: number = (currentPage - 1) * itemsPerPage;
    const end: number = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next(): void {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev(): void {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number): void {
    const pageNumber: number = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
