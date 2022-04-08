import styled, { css } from 'styled-components';
import { IStyledInput } from '../../Elements/Input/IInput';

export const StyledInput = styled.input<IStyledInput>`
  display: block;
  width: 280px;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 3px;

  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }

  &:nth-child(6) {
    margin-bottom: 20px;
  }

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
      width: auto;
    `}

  @media (max-width: 576px) {
    width: 280px;
  }
`;
