import styled from 'styled-components';

export const StyledUserCabinetPhotoWrapper = styled.div`
  padding: 35px;
  height: 600px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-right: none;

  @media (max-width: 992px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    border-right: none;
  }

  @media (max-width: 576px) {
    padding: 0;
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
export const StyledUserCabinetBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
