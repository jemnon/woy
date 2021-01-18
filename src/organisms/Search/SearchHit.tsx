import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { SearchHitProps } from '../../types/search';

const ellipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SearchHitContainer = styled.button`
  display: flex;
  align-items: center;

  outline: none;
  text-align: left;
  cursor: pointer;

  border: none;
  padding: 0;

  background-color: transparent;
`;

const SearchHitMD = styled.div`
  > p {
    margin: 0;
    max-width: 220px;

    font-size: 1rem;

    ${up('sm')} {
      max-width: 250px;
    }

    ${ellipsis};
  }
`;

const SearchHitImageWrapper = styled.div`
  position: relative;

  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  margin-right: ${({ theme: th }): string => th.spacing.sm4};

  background-color: ${({ theme: th }): string => th.colors.nearWhite};
`;

const SearchHitImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme: th }): string => th.zIndex.z1};

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

const SearchHitTitle = styled.h3`
  margin: 0;
  margin-bottom: ${({ theme: th }): string => th.spacing.sm2};
  max-width: 220px;

  font-family: ${({ theme: th }): string => th.fonts.latoBold};
  font-size: 1rem;
  font-weight: 700;

  ${ellipsis}

  ${up('sm')} {
    max-width: 250px;
  }
`;

const SearchHitText = styled.div`
  flex: 1;
`;

const SearchHit: FC<SearchHitProps> = ({
  bodyPreview,
  images,
  onClick,
  slug,
  title,
}) => {
  const [image] = images;
  return (
    <SearchHitContainer
      onClick={(): void => {
        onClick(slug);
      }}
    >
      <SearchHitImageWrapper>
        <SearchHitImage alt={title} srcSet={image.fluid.srcSet} />
      </SearchHitImageWrapper>
      <SearchHitText>
        <SearchHitTitle title={title}>{title}</SearchHitTitle>
        <SearchHitMD
          dangerouslySetInnerHTML={{
            __html: bodyPreview.childMarkdownRemark.html,
          }}
        />
      </SearchHitText>
    </SearchHitContainer>
  );
};

export default SearchHit;
