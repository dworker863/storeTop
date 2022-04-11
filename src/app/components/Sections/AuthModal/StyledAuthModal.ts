import { IStyledAuthModal } from './IAuthModal';
import styled, { css } from 'styled-components';

export const StyledAuthModal = styled.section<IStyledAuthModal>`
  z-index: 1000;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  padding-bottom: 40px;
  border-radius: 5px;
  box-shadow: 0px 5px ${(props) => props.theme.colors.lightGrey};
  background-color: #fff;
  transform: translate(-50%, -50%);

  @media (max-width: 420px) {
    width: 100%;
  }

  h2 {
    text-align: center;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 30px;
  }

  ${({ active }) =>
    active &&
    css`
      display: grid;
      grid-template-rows: 1fr 4fr;
      justify-items: center;
    `};
`;
