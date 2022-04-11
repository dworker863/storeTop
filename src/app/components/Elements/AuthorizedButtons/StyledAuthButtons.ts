import styled from 'styled-components';

export const StyledAuthButtons = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 25px;
  line-height: 25px;

  div li {
    padding-left: 20px;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
    color: #797979;

    &:before {
      left: 10px;
    }
  }

  @media (max-width: 1600px) {
    line-height: 50px;
    justify-content: flex-end;
  }
`;
export const StyledAuthTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  width: 100%;

  @media (max-width: 1600px) {
    height: 25px;
    margin-top: 0;
    text-align: right;
  }

  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const StyledCabinetLink = styled.span`
  text-decoration: underline;
  font-size: 14px;
`;
