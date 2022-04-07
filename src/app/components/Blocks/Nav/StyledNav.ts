import styled from 'styled-components';

export const StyledNavWrapper = styled.nav`
  width: 100%;

  @media (max-width: 1600px) {
    order: 2;
    line-height: 72px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  line-height: 72px;

  @media (max-width: 1600px) {
    line-height: 72px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;
