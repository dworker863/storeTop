import { IOverlay } from './IOverlay';
import styled, { css } from 'styled-components';

export const StyledOverlay = styled.div<IOverlay>`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-color: #000;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}

  ${({ mode }) =>
    mode === 'cart' &&
    css`
      height: 100%;
    `}
`;
