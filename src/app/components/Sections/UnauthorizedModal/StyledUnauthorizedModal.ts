import styled, { css } from 'styled-components';
import { IStyledOrderModalWrapper } from './IUnauthorizedModal';

export const StyledUnauthorizedModal = styled.div<IStyledOrderModalWrapper>`
  z-index: 1000;
  position: fixed;
  display: none;
  top: 0;
  width: 100%;
  height: 100vh;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;
