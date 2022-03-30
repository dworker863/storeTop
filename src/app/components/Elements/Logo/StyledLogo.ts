import styled from 'styled-components';

export const StyledLogo = styled.div`
  font-family: Gilroy;
  margin-bottom: 35px;
`;

export const StyledLogoThin = styled.span`
  font-size: 72px;
  line-height: 72px;
  font-weight: 700;
  color: #ff3a00;
  text-transform: uppercase;

  @media (max-width: 1600px) {
    font-size: 56px;
    line-height: 56px;
  }

  @media (max-width: 1200px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

export const StyledLogoBold = styled.span`
  font-size: 72px;
  line-height: 72px;
  font-weight: 900;
  color: #191919;
  text-transform: uppercase;

  @media (max-width: 1600px) {
    font-size: 56px;
    line-height: 56px;
  }

  @media (max-width: 1200px) {
    font-size: 42px;
    line-height: 42px;
  }
`;
