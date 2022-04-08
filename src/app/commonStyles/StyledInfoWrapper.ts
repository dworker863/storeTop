import styled from 'styled-components';

export const StyledInfoWrapper = styled.div`
  display: flex;
  margin-top: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: min-content;
    margin: 0 auto;
    margin-top: 35px;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
`;
