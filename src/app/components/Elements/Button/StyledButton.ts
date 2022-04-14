import styled, { css } from 'styled-components';
import { IStyledButton } from './IButton';

export const StyledButton = styled.button<IStyledButton>`
  cursor: pointer;
  background-color: #ff3a00;
  padding: 15px 17px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;

  ${({ simple }) =>
    simple &&
    css`
      background: linear-gradient(#d7d8d8, #afb3b6);
    `}

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
