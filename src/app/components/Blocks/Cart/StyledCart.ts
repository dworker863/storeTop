import styled from 'styled-components';

export const StyledCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 85px;
`;

export const StyledCartIcon = styled.img`
  position: relative;
  width: 65px;
  height: 60px;
  margin-right: 23px;

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
`;
