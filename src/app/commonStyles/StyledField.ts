import { Field } from 'formik';
import styled, { css } from 'styled-components';
import { IStyledInput } from '../commonInterfaces/IInput';

export const StyledField = styled(Field)<IStyledInput>`
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

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  @media (max-width: 576px) {
    width: 280px;

    ${({ inline }) =>
      inline &&
      css`
        width: auto;
      `}
  }
`;
