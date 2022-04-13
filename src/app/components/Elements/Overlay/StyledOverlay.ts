import { IOverlay } from './IOverlay';
import styled, { css } from 'styled-components';

export const StyledOverlay = styled.div<IOverlay>`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  opacity: 0.5;
  background-color: #000;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;
