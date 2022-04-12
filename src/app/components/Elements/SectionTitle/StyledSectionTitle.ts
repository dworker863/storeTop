import { IStyledSectionTitle } from './ISectionTitle';
import styled, { css } from 'styled-components';

export const StyledSectionTitle = styled.h2<IStyledSectionTitle>`
  width: 100%;
  margin-bottom: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.fontColor};

  ${({ primary }) =>
    primary &&
    css`
      color: ${(props) => props.theme.colors.red};
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin-bottom: 40px;
    `}

  @media (max-width: 576px) {
    text-align: center;
  }
`;
