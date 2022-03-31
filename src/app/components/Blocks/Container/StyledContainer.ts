import { IStyledContainer } from './IContainer';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div<IStyledContainer>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 1800px;
  margin: 0 auto;

  @media (max-width: 1800px) {
    width: 1560px;
  }

  @media (max-width: 1600px) {
    width: 1360px;
    justify-content: flex-start;
  }

  @media (max-width: 1400px) {
    width: 1140px;
    justify-content: flex-start;
  }

  @media (max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({ type }) =>
    type === 'common' &&
    css`
      max-width: 1220px;
      margin: 0 auto;
    `}
`;
