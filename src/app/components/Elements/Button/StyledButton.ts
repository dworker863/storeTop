import styled, { css } from 'styled-components';
import { IStyledButton } from './IButton';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';

export const StyledButton = styled.button<IStyledButton>`
  cursor: pointer;
  background-color: #ff3a00;
  padding: 15px 17px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  ${({ mode }) =>
    mode === 'simple' &&
    css`
      background: linear-gradient(#d7d8d8, #afb3b6);
    `}

  ${({ mode }) =>
    mode === 'good' &&
    css`
      padding: 18px 28px;
    `}

    ${({ mode }) =>
    mode === 'favorite' &&
    css`
      position: relative;
      padding: 18px 28px;
      padding-left: 55px;
      background: linear-gradient(#f5cf2f, #eba21e);

      &:before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 18px;
        width: 20px;
        height: 20px;
        background-image: url(${favoriteIcon});
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(-45%);
      }
    `}

  /* @media (max-width: 992px) {
    font-size: 16px;
  } */

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
