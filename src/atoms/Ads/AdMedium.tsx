import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const BaseAdMedium = styled.div`
  margin: 4rem auto;
  width: 320px;
  height: 50px;

  background-color: ${({ theme: { colors } }): string => colors.nearWhite};
`;

const AdMedium: FC<{ id?: string }> = ({ id = 'skm-ad-medrec-1' }) => {
  return (
    <>
      <Helmet>
        <script type="text/javascript">
          {`
            blogherads?.adq?.push(['medrec', 'skm-ad-medrec-1']);
          `}
        </script>
      </Helmet>
      <BaseAdMedium id={id} />
    </>
  );
};

export default AdMedium;
