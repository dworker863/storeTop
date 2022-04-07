import styled from 'styled-components';

export const StyledTopLine = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: 75px;

  & > ul {
    @media (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 1600px) {
    flex-wrap: wrap;
    justify-content: space-between;
  } ;
`;
