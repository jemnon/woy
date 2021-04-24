import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import { Pinterest } from '../../atoms/Icons';

interface PinButtonProps {
  description?: string;
  media?: string;
  url: string;
  width?: string;
}

const PinButtonContainer = styled.div<Pick<PinButtonProps, 'width'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${({ width = 'auto' }): string => width};
`;

const PinButtonLabel = styled.span`
  padding-right: ${({ theme }): string => theme.spacing.sm1};
`;

const PinButton: FC<PinButtonProps> = ({ description, media, url, width }) => {
  const mediaParam = media ? `&media=${media}` : '';
  const params =
    `menubar=no,` +
    `toolbar=no,` +
    `resizable=yes,` +
    `scrollbars=yes,` +
    `height=600,` +
    `width=600`;
  const handleClick = (): void => {
    window.open(
      `http://pinterest.com/pin/create/button/?url=${url}&description=${description}${mediaParam}`,
      '',
      params,
    );
  };
  return (
    <PinButtonContainer width={width}>
      <Button
        variant="outline"
        shape="rectangle"
        size="small"
        onClick={handleClick}
        width={width}
      >
        <PinButtonLabel>Pin It</PinButtonLabel>
        <Pinterest
          fontSize="0.85rem"
          fill="#BB5B34"
          style={{ marginTop: '2px' }}
        />
      </Button>
    </PinButtonContainer>
  );
};

export default PinButton;
