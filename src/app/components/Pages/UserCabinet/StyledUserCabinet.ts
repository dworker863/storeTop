import styled from 'styled-components';
import pencilIcon from '../../../../assets/images/pencil-icon.png';

export const StyledUserCabinet = styled.section`
  width: 100%;
`;

export const StyledUserCabinetName = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 24px;
`;

export const StyledUserCabinetDate = styled.div`
  margin-top: 0;
  width: max-content;

  span {
    font-size: 12px;
  }

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

export const StyledUserCabinetEmail = styled.div`
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

export const StyledUserCabinetTel = styled.div`
  &:after {
    content: '';
    display: block;
    width: 105px;
    height: 1px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const StyledUserCabinetAddressWrapper = styled.div``;

export const StyledUserCabinetEditButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  padding-left: 40px;
  border-bottom-left-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${pencilIcon});
  background-repeat: no-repeat;
  background-position: 20px 16px;
`;
