import styled from 'styled-components';
import arrow from '../../../../assets/images/arrow.png';

export const StyledSliderWrapper = styled.div`
  position: relative;
`;

export const StyledNav = styled.div`
  z-index: 1000;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50px;
  transform: translateY(-50%);
`;

export const StyledPrevButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: -70px;
  width: 50px;
  height: 50px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: rotate(180deg);
`;

export const StyledNextButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -70px;
  width: 50px;
  height: 50px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
