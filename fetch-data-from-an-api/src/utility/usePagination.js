import React from "react";
import { useMemo } from "react";

export const usePagination = ({
  totalCount,
  pgSize,
  siblingCount = 1,
  currPage,
}) => {
  const pagingRange = useMemo(() => {}, [
    totalCount,
    pgSize,
    siblingCount,
    currPage,
  ]);

  return pagingRange;
};
