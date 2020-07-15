import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { BottomSpacing } from './spacing-styled';
import { HeadlineProps, HeadingProps } from '../../types/styles';

const Headline = styled.h1<HeadlineProps>`
  position: relative;
  font-family: ${({ theme }): string => theme.fonts.noto};
  ${up('md')} {
    font-size: 1.75rem;
    padding-left: 1.5rem;
    white-space: ${({ whiteSpace }): string => whiteSpace || ''};
    overflow: hidden;
    text-overflow: ellipsis;
  }
  font-size: 1.5rem;
  text-transform: capitalize;
  line-height: 1.5;
  margin: 0;
  margin-bottom: ${({ bottomSpacing }): string => bottomSpacing || '1rem'};
  padding-left: 1rem;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 4px;
    height: 80%;
    transform: translateY(-50%);
    background-color: ${({ theme }): string => theme.colors.orange};
  }
`;

const BaseHeading = css<HeadingProps>`
  font-family: ${({ theme }): string => theme.fonts.noto};
  line-height: 1.5;
  text-align: ${({ textAlign }): string => textAlign || 'left'};

  margin: 0;
  ${BottomSpacing};
`;

const H1 = styled.h1<HeadingProps>`
  ${BaseHeading}
  font-size: 2.25rem;
  ${up('md')} {
    font-size: 3rem;
  }
`;

const H2 = styled.h2<HeadingProps>`
  ${BaseHeading}
  ${up('md')} {
    font-size: 1.5rem;
  }
`;

export { Headline, H1, H2 };
