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

const UserAvatar: FC<IUserAvatar> = ({ mode }) => {
  const [image, setImage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(111);

    e.target.files && setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <StyledUserCabinetPhotoWrapper>
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <>
            <StyledUserCabinetPhoto {...getRootProps()}>
              {image === '' && (
                <img
                  src={plusIcon}
                  alt="Иконка знака плюс"
                  style={{ width: 40 }}
                />
              )}
              {image !== '' && (
                <img
                  src={image}
                  alt="Аватар"
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </StyledUserCabinetPhoto>
            <StyledUserCabinetBtnWrapper mode={mode}>
              <ButtonUpload
                {...getInputProps()}
                changeHandler={(e) => handleChange(e)}
              />
            </StyledUserCabinetBtnWrapper>
          </>
        )}
      </Dropzone>
    </StyledUserCabinetPhotoWrapper>
  );
};

export default UserAvatar;
