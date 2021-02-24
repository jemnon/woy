import React, {
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { LeftArrow, RightArrow } from '../../atoms/Icons';
import {
  CarouselBody,
  CarouselButton,
  CarouselContainer,
  CarouselContent,
  CarouselControls,
  CarouselDot,
  CarouselList,
  CarouselListItem,
  CarouselNav,
} from './CarouselStyled';
import useWindowResize from '../../hooks/useWindowResize';
import { Easing } from './carousel-types';

interface CarouselProps {
  carouselWidth?: string;
  children: ReactNode;
  easing?: Easing;
  onClick?: () => void;
  transitionDuration?: string;
}

const generateKey = (label: string, idx: number): string => `${label}-${idx}`;

const Carousel: FC<CarouselProps> = ({
  carouselWidth = '100%',
  children,
  easing,
  transitionDuration,
}) => {
  const total = React.Children.count(children);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [totalWidth, setTotalWidth] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [xPos, setXPos] = useState<number>(0);
  const target = useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowResize();
  const setDimensions = useCallback(() => {
    if (target.current) {
      // each carousel item x the total
      setTotalWidth(target.current?.offsetWidth * total);
      if (totalWidth) {
        const generatedWidth = Math.ceil(totalWidth / total);
        setWidth(generatedWidth);
        if (width) setXPos(-(currentIdx * width));
      }
    }
  }, [currentIdx, target, total, totalWidth, width]);

  const handleNext = (): void => {
    if (currentIdx < total - 1) {
      setCurrentIdx(nextIdx => nextIdx + 1);
      if (width) setXPos(nextXPos => nextXPos - width);
    }
  };

  const handlePrev = (): void => {
    if (currentIdx > 0) {
      setCurrentIdx(prevIdx => prevIdx - 1);
      if (width) setXPos(prevXPos => prevXPos + width);
    }
  };

  const handleNavClick = (idx: number): void => {
    setCurrentIdx(idx);
    if (width) {
      const x = -(idx * width);
      setXPos(x);
    }
  };

  useEffect(() => {
    setDimensions();
  }, [setDimensions, windowWidth]);

  return (
    <CarouselContainer ref={target} carouselWidth={carouselWidth}>
      <CarouselBody>
        <CarouselContent
          easing={easing}
          w={totalWidth}
          xPos={xPos}
          transitionDuration={transitionDuration}
        >
          {children}
        </CarouselContent>
        <CarouselButton
          direction="left"
          isDisabled={currentIdx === 0}
          onClick={handlePrev}
        >
          <LeftArrow fill="#fff" style={{ marginLeft: '-2px' }} />
        </CarouselButton>
        <CarouselButton
          direction="right"
          isDisabled={currentIdx === total - 1}
          onClick={handleNext}
        >
          <RightArrow fill="#fff" style={{ marginRight: '-2px' }} />
        </CarouselButton>
      </CarouselBody>
      <CarouselControls>
        <CarouselNav>
          <CarouselList>
            {Array.from({ length: total }, (_, idx) => (
              <CarouselListItem key={generateKey('carousel-list-item', idx)}>
                <CarouselDot
                  isCurrent={currentIdx === idx}
                  onClick={(): void => handleNavClick(idx)}
                />
              </CarouselListItem>
            ))}
          </CarouselList>
        </CarouselNav>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel;
