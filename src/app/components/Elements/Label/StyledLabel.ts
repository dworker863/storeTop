import styled, { css } from 'styled-components';
import { IStyledLabel } from './ILabel';

export const StyledLabel = styled.label<IStyledLabel>`
  margin-right: 10px;
  margin-bottom: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};

  ${({ simple }) =>
    simple &&
    css`
      font-size: 14px;
      color: ${(props) => props.theme.colors.grey};
    `}
`;
