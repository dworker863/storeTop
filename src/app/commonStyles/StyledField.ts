import { Field } from 'formik';
import styled, { css } from 'styled-components';
import { IStyledInput } from '../commonInterfaces/IInput';
import checkIcon from '../../assets/images/check-icon.png';

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
      position: relative;
      display: inline-block;
      width: auto;
      margin-right: 15px;

      &[type='checkbox'] {
        visibility: hidden;

        &:before {
          visibility: visible;
          content: '';
          position: absolute;
          top: -4px;
          display: block;
          width: 14px;
          height: 14px;
          border: 1px solid ${(props) => props.theme.colors.lightGrey};
        }
      }

      &[type='checkbox']:checked {
        &:before {
          background-color: ${(props) => props.theme.colors.primary};
          background-image: url(${checkIcon});
          background-size: contain;
        }
      }
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
