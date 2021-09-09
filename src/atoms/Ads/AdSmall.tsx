import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const BaseAdSmall = styled.div`
  margin: 4rem auto;
  width: 320px;
  height: 50px;

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};
`;

const AdSmall: FC<{ id?: string; pathname?: string }> = ({
  id = 'skm-ad-tinybanner',
  pathname,
}) => {
  return (
    <>
      <Helmet>
        <script type="text/javascript">
          {`
            blogherads.adq.push(['tinybanner', 'skm-ad-tinybanner']);
          `}
        </script>
      </Helmet>
      <BaseAdSmall id={id} />
    </>
  );
};

export default AdSmall;
