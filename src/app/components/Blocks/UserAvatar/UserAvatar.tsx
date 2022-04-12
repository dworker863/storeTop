import { FC } from 'react';
import Button from '../../Elements/Button/Button';
import { IUserAvatar } from './IUserAvatar';
import {
  StyledUserCabinetBtnWrapper,
  StyledUserCabinetPhoto,
  StyledUserCabinetPhotoWrapper,
} from './StyledUserAvatar';

const UserAvatar: FC<IUserAvatar> = ({ buttonsText, mode, image }) => {
  return (
    <StyledUserCabinetPhotoWrapper>
      <StyledUserCabinetPhoto image={image}></StyledUserCabinetPhoto>
      <StyledUserCabinetBtnWrapper mode={mode}>
        {buttonsText?.map((text, index) => (
          <Button key={index + text} text={text} />
        ))}
      </StyledUserCabinetBtnWrapper>
    </StyledUserCabinetPhotoWrapper>
  );
};

export default UserAvatar;
