import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 0;
  margin: 0 -0.5rem;
`;

interface PaginationButtonsProps {
  isCurrentPage?: boolean;
}

const PaginationButton = styled.button<PaginationButtonsProps>`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;

  font-weight: bold;

  background-color: ${({ isCurrentPage, theme }): string =>
    isCurrentPage ? theme.colors.orange : theme.colors.nearWhite};
  color: ${({ isCurrentPage, theme }): string =>
    isCurrentPage ? theme.colors.white : theme.colors.nearBlack};

  cursor: pointer;
  border: none;
  outline: none;
  transition: ${({ theme }): string => theme.transition};
`;

interface PaginationProps {
  currentPage: number;
  pagesPer: number;
  onClick: (page: number) => void;
  pages: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  onClick,
  pages,
  pagesPer,
}) => {
  const [currentPageIdx, setCurrentPageIdx] = useState<number>(currentPage);
  const [currentPages, setCurrentPages] = useState<number[] | null>(null);
  const handlePrevClick = (): void => {
    const prevPage = currentPageIdx - 1;
    setCurrentPageIdx(prevPage);
  };
  const handleNextClick = (): void => {
    const nextPage = currentPageIdx + 1;
    setCurrentPageIdx(nextPage);
  };
  useEffect(() => {
    if (!currentPages) {
      const list = Array.from(Array(pages), (_, idx): number => {
        return idx + 1;
      }).filter(value => value <= pagesPer);
      setCurrentPages(list);
    }
  }, [currentPages, pages, setCurrentPages]);
  useEffect(() => {
    if (currentPage !== currentPageIdx) {
      console.log('page change');
    }
    onClick(currentPageIdx);
  }, [currentPages, currentPageIdx, setCurrentPages]);
  return (
    <>
      {currentPages && (
        <PaginationContainer>
          {currentPageIdx > 1 && (
            <PaginationButton onClick={handlePrevClick}>Prev</PaginationButton>
          )}
          {currentPages.map(page => {
            return (
              <PaginationButton
                key={page}
                isCurrentPage={currentPageIdx === page}
                onClick={(): void => {
                  setCurrentPageIdx(page);
                }}
              >
                {page}
              </PaginationButton>
            );
          })}
          {currentPageIdx !== pages && (
            <PaginationButton onClick={handleNextClick}>Next</PaginationButton>
          )}
        </PaginationContainer>
      )}
    </>
  );
};

export default Pagination;
