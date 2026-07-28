import styled from 'styled-components';

export const Loading = styled.div`
  display: grid;
  min-height: 70svh;
  place-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
