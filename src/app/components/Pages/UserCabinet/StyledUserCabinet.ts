import styled from 'styled-components';

export const StyledUserCabinet = styled.section`
  width: 100%;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledUserCabinetInfoWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
`;

export const StyledUserCabinetPhotoWrapper = styled.div`
  padding: 35px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};

  button {
    &:nth-child(2) {
      margin-right: 12px;
    }
  }
`;

export const StyledUserCabinetPhoto = styled.div`
  width: 380px;
  height: 455px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.superLightGrey};
`;

export const StyledUserCabinetInfo = styled.div`
  padding: 30px 45px;
`;

export const StyledUserCabinetName = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 24px;
`;

export const StyledUserCabinetDate = styled.p`
  margin-top: 0;
  width: max-content;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const StyledUserCabinetEmail = styled.p`
  &:after {
    content: '';
    display: block;
    width: 105px;
    height: 1px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const StyledUserCabinetSubtitle = styled.h4`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledUserCabinetTel = styled.p`
  &:after {
    content: '';
    display: block;
    width: 105px;
    height: 1px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;
export const StyledUserCabinetNote = styled.p`
  max-width: 400px;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledUserCabinetAddressWrapper = styled.div``;

export const StyledUserCabinetAddress = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
