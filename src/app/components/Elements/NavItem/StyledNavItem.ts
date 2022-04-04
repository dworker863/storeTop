import styled, { css } from 'styled-components';
import { IStyledNavMobile } from '../../Blocks/NavMobile/INavMobile';

export const StyledNavItem = styled.li<IStyledNavMobile>`
  cursor: pointer;
  position: relative;
  padding-left: 40px;
  text-transform: uppercase;
  font-weight: 700;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ff3a00;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  ${({ type }) =>
    type === 'mobile' &&
    css`
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
    `}

  &.menuItem {
    color: #fff;
    border-right: 1px solid #fff;
  }

  @media (max-width: 1400px) {
    font-size: 14px;
  }

  @media (max-width: 1200px) {
    padding-left: 20px;

    &:before {
      display: none;
    }
  }
`;
