import styled from 'styled-components';

export const StyledCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 85px;

  @media (max-width: 1800px) {
    margin-left: 70px;
  }

  @media (max-width: 1600px) {
    align-self: start;
    order: 3;
    margin-left: 0;
  }
`;

export const StyledCartIcon = styled.img`
  position: relative;
  width: 65px;
  height: 60px;
  margin-right: 23px;
  transform: translateY(-8px);

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-right: 2px solid #ff3a00;
    background-color: #000;
  }

  @media (max-width: 576px) {
    width: 55px;
    height: 50px;
  }
`;

export const StyledCartCount = styled.span``;
