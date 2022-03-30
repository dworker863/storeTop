import styled from 'styled-components';

export const StyledSearch = styled.div`
  position: relative;
  display: inline-block;
  /* align-self: flex-end; */
  width: 730px;
  height: 60px;
  margin-top: 35px;
  margin-left: 110px;
  border: 1px solid #979797;
  border-radius: 7px;
  box-shadow: 0px 5px #d1d1d1;

  @media (max-width: 1800px) {
    width: 585px;
    margin-left: 70px;
  }

  @media (max-width: 1600px) {
    width: 910px;
    margin-top: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
  }
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px 70px;
  border-radius: 7px;
  background-color: #f9f9f9;

  &::placeholder {
    font-size: 18px;
    line-height: 60px;
    color: #979797;
  }
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  left: 18px;
  top: 50%;
  width: 30px;
  transform: translateY(-50%);
`;
