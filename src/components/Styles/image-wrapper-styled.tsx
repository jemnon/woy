import styled from 'styled-components';

interface ImageWrapperProps {
  borderRadius?: string;
  marginBottom?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 100%;

  margin-bottom: ${({ marginBottom }): string => marginBottom || '1rem'};
  border-radius: ${({ borderRadius }): string => borderRadius || '2px'};

  grid-area: image;
  overflow: hidden;
`;

export default ImageWrapper;
