import {useState, useRef, useCallback} from 'react';
import {StroyProps} from '../models/content.model';

export const useNext = ({start, end}: StroyProps) => {
  const [currentPage, setCurrentPage] = useState(start);
  const [flipped, setFlipped] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const transitionDuration = 1000;

  const handleNext = useCallback(() => {
    setFlipped(true);
    setTimeout(() => {
      setCurrentPage(prevPage => {
        const nextPage = prevPage + 1 > end ? start : prevPage + 1;

        if (nextPage === start) {
          window.location.href = '/';
        }
        return nextPage;
      });
      setFlipped(false);
    }, transitionDuration / 2);
  }, [end, start, transitionDuration]);

  const handlePre = useCallback(() => {
    setFlipped(true);
    setTimeout(() => {
      setCurrentPage(prevPage => (prevPage - 1 < start ? end : prevPage - 1));
      setFlipped(false);
    }, transitionDuration / 2);
  }, [end, start, transitionDuration]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!currentRef.current) return;
      const touchMoveX = e.touches[0].clientX;
      const diffX = touchStartX.current - touchMoveX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePre();
        }
      }
    },
    [handleNext, handlePre],
  );

  const handleTouchEnd = useCallback(() => {}, []);

  return {
    currentPage,
    handleNext,
    handlePre,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentRef,
    flipped,
  };
};
