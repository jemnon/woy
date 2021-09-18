import React, { FC } from 'react';
import styled from 'styled-components';

const BaseAdSmall = styled.div`
  margin: 4rem auto;
  width: 320px;
  height: 50px;

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};
`;

const AdSmall: FC = () => {
  return <BaseAdSmall id="skm-ad-tinybanner" />;
};

export default AdSmall;
