import { IStyledAuthModal } from './IAuthModal';
import styled, { css } from 'styled-components';

export const StyledAuthModal = styled.section<IStyledAuthModal>`
  width: 700px;
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;

export const StyledAuthLabel = styled.label`
  display: block;
`;

export const StyledAuthInput = styled.input`
  display: block;
  border: 1px solid #000;
`;
