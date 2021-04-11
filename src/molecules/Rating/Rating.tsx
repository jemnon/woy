import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ButtonReset } from '../../atoms/Button';
import { StarFull } from '../../atoms/Icons';

interface RatingProps {
  onSetRating?: (val: number) => void;
  rating?: number;
}

const RatingContainer = styled.ul`
  display: flex;
  align-items: center;

  margin-bottom: ${({ theme: { spacing } }): string => spacing.sm4};
`;

const RatingListItem = styled.li``;

const RatingButton = styled.button`
  ${ButtonReset};
  cursor: pointer;
  padding-right: ${({ theme: { spacing } }): string => spacing.sm1};
  padding-left: ${({ theme: { spacing } }): string => spacing.sm1};
`;

const Rating: FC<RatingProps> = ({ onSetRating, rating = 0 }) => {
  const [value, setValue] = useState<number>(rating);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const total = 5;
  const handleRating = (val: number): void => {
    setIsHovering(false);
    setValue(val);
    if (onSetRating) onSetRating(val);
  };
  const handleMouseOver = (val: number): void => {
    setIsHovering(true);
  };
  const handleMouseOut = (): void => {
    setIsHovering(false);
  };
  const getFill = (val: number, idx: number): string => {
    console.log('isHovering: ', isHovering);
    if (idx <= val && val !== 0) {
      return '#BB5B34';
    }
    return '#666';
  };
  return (
    <RatingContainer>
      {Array.from({ length: total }, (_, idx) => (
        <RatingListItem key={`rating-list-item-${idx}`}>
          <RatingButton
            onClick={(): void => handleRating(idx + 1)}
            onMouseOver={(): void => handleMouseOver(idx + 1)}
            onMouseOut={handleMouseOut}
          >
            <StarFull fill={getFill(value, idx + 1)} fontSize="1.25rem" />
          </RatingButton>
        </RatingListItem>
      ))}
    </RatingContainer>
  );
};

export default Rating;
