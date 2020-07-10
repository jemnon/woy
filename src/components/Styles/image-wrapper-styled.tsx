import styled from 'styled-components';

interface ImageWrapperProps {
  borderRadius?: string;
  marginBottom?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 100%;
  margin-bottom: ${({ marginBottom }): string => marginBottom || '1rem'};
  overflow: hidden;
  border-radius: ${({ borderRadius }): string => borderRadius || '2px'};
  grid-area: image;
  .gatsby-image-wrapper {
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 0;
  }
  .tiny {
    z-index: 1;
    filter: blur(15px);
    transform: scale(1.1);
  }
`;

export default ImageWrapper;
