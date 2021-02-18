import React, {FC} from 'react';
import styled from 'styled-components';

interface ShowMoreProps {}

const ShowMoreContainer = styled.div``;

const ShowMore: FC<ShowMoreProps> = props => (
  <ShowMoreContainer>
    {props}
  </ShowMoreContainer>
);

export default ShowMore;