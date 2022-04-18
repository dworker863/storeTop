import { ChangeEvent, FC, useState } from 'react';
import ButtonUpload from '../../Elements/ButtonUpload/ButtonUpload';
import { IUserAvatar } from './IUserAvatar';
import {
  StyledUserCabinetBtnWrapper,
  StyledUserCabinetPhoto,
  StyledUserCabinetPhotoWrapper,
} from './StyledUserAvatar';
import Dropzone from 'react-dropzone';
import plusIcon from '../../../../assets/images/plus-icon.png';

const UserAvatar: FC<IUserAvatar> = ({ mode, image, changeHandler }) => {
  const [userAvatarUrl, setUserAvatarUrl] = useState('');

  const handleChange = (e: ChangeEvent<any>) => {
    console.log(e.target.files[0]);

    changeHandler && changeHandler(e.target.files[0]);
    e.target.files && setUserAvatarUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <StyledUserCabinetPhotoWrapper>
      <Dropzone
        onDrop={(acceptedFiles) => {
          changeHandler && changeHandler(acceptedFiles[0]);
          setUserAvatarUrl(URL.createObjectURL(acceptedFiles[0]));
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <>
            <StyledUserCabinetPhoto
              {...getRootProps()}
              onInput={() => {
                changeHandler && changeHandler(acceptedFiles[0]);
                setUserAvatarUrl(URL.createObjectURL(acceptedFiles[0]));
              }}
            >
              {userAvatarUrl === '' && !image && (
                <img
                  src={plusIcon}
                  alt="Иконка знака плюс"
                  style={{ width: 40 }}
                />
              )}
              {(userAvatarUrl !== '' || image) && (
                <img
                  src={userAvatarUrl || image}
                  alt="Аватар"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </StyledUserCabinetPhoto>
            <StyledUserCabinetBtnWrapper mode={mode}>
              <ButtonUpload {...getInputProps()} changeHandler={handleChange} />
            </StyledUserCabinetBtnWrapper>
          </>
        )}
      </Dropzone>
    </StyledUserCabinetPhotoWrapper>
  );
};

export default UserAvatar;
