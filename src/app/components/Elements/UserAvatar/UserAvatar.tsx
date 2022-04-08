import { FC } from 'react';
import Button from '../Button/Button';
import { IUserAvatar } from './IUserAvatar';
import {
  StyledUserCabinetBtnWrapper,
  StyledUserCabinetPhoto,
  StyledUserCabinetPhotoWrapper,
} from './StyledUserAvatar';

const UserAvatar: FC<IUserAvatar> = ({ buttonsText, mode }) => {
  return (
    <StyledUserCabinetPhotoWrapper>
      <StyledUserCabinetPhoto></StyledUserCabinetPhoto>
      <StyledUserCabinetBtnWrapper mode={mode}>
        {buttonsText.map((text, index) => (
          <Button key={index + text} text={text} />
        ))}
      </StyledUserCabinetBtnWrapper>
    </StyledUserCabinetPhotoWrapper>
  );
};

export default UserAvatar;
