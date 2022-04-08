import styled from 'styled-components';

export const StyledFilters = styled.div`
  display: flex;
  padding: 20px 30px;
  outline: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-top: none;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 5px #d1d1d1;
  background-color: #f9f9f9;

  input {
    margin-right: 8px;
    margin-bottom: 5px;
  }

  @media (max-width: 1800px) {
    padding: 20px 50px;
  }

  @media (max-width: 1200px) {
    padding: 20px 55px;
  }
`;

export const StyledFiltersTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
`;

export const StyledFiltersBlock = styled.div`
  padding: 0 25px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }

  label {
    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1800px) {
    padding: 0 55px;
  }

  @media (max-width: 1200px) {
    padding: 0 65px;
  }
`;
