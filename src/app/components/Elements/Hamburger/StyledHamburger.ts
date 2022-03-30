import styled, { css } from 'styled-components';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const HamburgerWrapper = styled.div`
  position: absolute;
  top: 70px;
  display: none;
  right: 25px;
  cursor: pointer;
  padding-top: 26px;

  @media (max-width: 992px) {
    display: block;
  }

  &:hover {
    div {
      &:before,
      &:after {
        background-color: ${(props) => props.theme.colors.primary};
      }
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const StyledHamburger = styled.div<IStyledActiveComponent>`
  z-index: 100;
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #ff3a00;
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.15s;
  }

  &:before {
    top: -7px;
  }

  &:after {
    top: 7px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & {
        transform: rotate(45deg);

        &:before {
          display: none;
        }

        &:after {
          top: 0;
          transform: rotate(-90deg);
        }
      }
    `}
`;
