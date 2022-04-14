import { IStyledEyeIcon } from './../commonInterfaces/IStyledEyeIcon';
import styled, { css } from 'styled-components';

export const StyledEyeIcon = styled.img<IStyledEyeIcon>`
  cursor: pointer;
  margin-left: 10px;

  ${({ position }) =>
    position === 'absolute' &&
    css`
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    `}
`;
