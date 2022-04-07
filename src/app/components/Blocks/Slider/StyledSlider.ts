import styled from 'styled-components';
import arrow from '../../../../assets/images/arrow.png';

export const StyledSliderWrapper = styled.div`
  position: relative;
`;

export const StyledNav = styled.div`
  z-index: 10;
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

  @media (max-width: 1400px) {
    left: -15px;
  }

  @media (max-width: 992px) {
    left: 15px;
  }
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

  @media (max-width: 1400px) {
    right: -15px;
  }

  @media (max-width: 992px) {
    right: 15px;
  }
`;
