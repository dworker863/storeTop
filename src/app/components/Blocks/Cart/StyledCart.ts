import styled from 'styled-components';

export const StyledCartWrapper = styled.div`
  @media (max-width: 1600px) {
    order: 3;
  }
`;

export const StyledCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 85px;

  @media (max-width: 1800px) {
    margin-left: 70px;
  }

  @media (max-width: 1600px) {
    order: 3;
    align-self: start;
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

export const StyledCartCount = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35px;
  left: -8.5px;
  width: 25px;
  height: 25px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  font-weight: 700;
`;
