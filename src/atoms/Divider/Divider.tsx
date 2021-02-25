import styled from 'styled-components';
import { hexToRGBA } from '../../utils/colors';

const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid
    ${({ theme: { colors } }): string => `${hexToRGBA(colors.nearBlack, 10)}`};

  padding: 0;
  margin: 0;
  margin-top: ${({ theme: { spacing } }): string => spacing.md4};
  margin-bottom: ${({ theme: { spacing } }): string => spacing.md4};
`;

export default Divider;
