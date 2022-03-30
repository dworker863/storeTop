import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1800px;
  margin: 0 auto;

  @media (max-width: 1800px) {
    width: 1560px;
  }

  @media (max-width: 1600px) {
    width: 1360px;
    justify-content: flex-start;
  }

  @media (max-width: 1400px) {
    width: 1140px;
    justify-content: flex-start;
  }

  @media (max-width: 1200px) {
    width: 992px;
  }
`;
