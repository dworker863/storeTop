import styled from 'styled-components';

export const StyledUnauthButtons = styled.ul`
  display: flex;
  justify-content: flex-start;
  line-height: 72px;

  div li {
    &::before {
      display: none;
    }
  }

  @media (max-width: 1600px) {
    line-height: 56px;
  }
`;
