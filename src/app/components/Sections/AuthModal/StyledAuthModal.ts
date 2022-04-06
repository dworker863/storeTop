import { IStyledAuthModal } from './IAuthModal';
import styled, { css } from 'styled-components';

export const StyledAuthModal = styled.section<IStyledAuthModal>`
  z-index: 1000;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  background-color: #fff;
  transform: translate(-50%, -50%);

  h2 {
    text-align: center;
  }

  ${({ active }) =>
    active &&
    css`
      display: block;
    `};
`;
