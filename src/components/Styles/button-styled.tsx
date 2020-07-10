import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 20px;
  padding-top: ${({ theme }): string => theme.spacing.xs};
  padding-bottom: ${({ theme }): string => theme.spacing.xs};
  padding-left: ${({ theme }): string => theme.spacing.l};
  padding-right: ${({ theme }): string => theme.spacing.l};

  outline: none;
  cursor: pointer;

  font-family: ${({ theme }): string => theme.fonts.latoBold};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;

  background-color: ${({ theme }): string => theme.colors.white};
  border: 1px solid ${({ theme }): string => theme.colors.orange};
  color: ${({ theme }): string => theme.colors.orange};
`;

export default Button;
