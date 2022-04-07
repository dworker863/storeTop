import { IStyledActiveComponent } from './../../../commonInterfaces/IStyledActiveComponent';
import styled, { css } from 'styled-components';

export const StyledNavMobileWrapper = styled.nav<IStyledActiveComponent>`
  z-index: 100;
  position: absolute;
  display: none;
  right: 0;
  width: 320px;
  height: 100%;
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

    & > ul {
      justify-content: center;
    }
  }
`;

export const StyledNavMobile = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    & > ul {
      justify-content: center;
      margin-top: 30px;

      a li {
        padding-left: 20px;
        &::before {
          display: block;
          left: 10px;
        }
      }
    }
  }
`;
