import { IStyledActiveComponent } from './../../../commonInterfaces/IStyledActiveComponent';
import styled, { css } from 'styled-components';

export const StyledNavMobileWrapper = styled.nav<IStyledActiveComponent>`
  z-index: 100;
  position: absolute;
  display: none;
  right: 0;
  width: 320px;
  height: 100vh;
  padding: 130px 0;
  background-color: #fff;
  transform: translateX(320px);
  transition: all 0.3s;

  ${({ isActive }) =>
    isActive &&
    css`
      & {
        transform: translateX(0);
      }
    `};

  @media (max-width: 992px) {
    display: block;
  }
`;

export const StyledNavMobile = styled.ul`
  display: flex;
  flex-direction: column;
`;
