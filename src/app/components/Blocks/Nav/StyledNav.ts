import styled from 'styled-components';

export const StyledNavWrapper = styled.nav`
  width: 100%;
`;

export const StyledNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  line-height: 72px;

  @media (max-width: 1600px) {
    line-height: 56px;
  }

  @media (max-width: 1200px) {
    line-height: 48px;
  }
`;
