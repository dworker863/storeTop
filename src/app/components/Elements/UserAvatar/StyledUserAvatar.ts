import styled, { css } from 'styled-components';
import { IStyledUserCabinetBtnWrapper } from './IUserAvatar';

export const StyledUserCabinetPhotoWrapper = styled.div`
  padding: 35px;
  height: 600px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-right: none;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 6px;
    border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  }

  @media (max-width: 576px) {
    padding: 0;
    height: 480px;
    border-bottom: none;
  }
`;

export const StyledUserCabinetPhoto = styled.div`
  width: 378px;
  height: 455px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.superLightGrey};

  @media (max-width: 992px) {
    width: 345px;
  }

  @media (max-width: 576px) {
    border: none;
    width: 318px;
    height: 385px;
  }
`;
export const StyledUserCabinetBtnWrapper = styled.div<IStyledUserCabinetBtnWrapper>`
  display: flex;
  justify-content: space-between;

  ${({ mode }) =>
    mode === 'center' &&
    css`
      justify-content: center;
    `}
`;
