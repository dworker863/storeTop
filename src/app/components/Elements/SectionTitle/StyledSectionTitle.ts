import { IStyledSectionTitle } from './ISectionTitle';
import styled, { css } from 'styled-components';

export const StyledSectionTitle = styled.h2<IStyledSectionTitle>`
  font-size: 24px;
  margin-bottom: 0;

  ${({ primary }) =>
    primary &&
    css`
      color: ${(props) => props.theme.colors.red};
    `}
`;
