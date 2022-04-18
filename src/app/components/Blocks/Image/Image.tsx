import { ChangeEvent, FC, useState } from 'react';
import ButtonUpload from '../../Elements/ButtonUpload/ButtonUpload';
import {
  StyledImageBtnWrapper,
  StyledImage,
  StyledImageWrapper,
} from './StyledImage';
import Dropzone from 'react-dropzone';
import plusIcon from '../../../../assets/images/plus-icon.png';
import { IImage } from './IImage';

const Image: FC<IImage> = ({ mode, buttonMode, image, changeHandler }) => {
  const [userAvatarUrl, setUserAvatarUrl] = useState('');

  const handleChange = (e: ChangeEvent<any>) => {
    console.log(e.target.files[0]);

    changeHandler && changeHandler(e.target.files[0]);
    e.target.files && setUserAvatarUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <StyledImageWrapper mode={mode}>
      <Dropzone
        disabled={(mode === 'good' || mode === 'profile') && true}
        onDrop={(acceptedFiles) => {
          changeHandler && changeHandler(acceptedFiles[0]);
          setUserAvatarUrl(URL.createObjectURL(acceptedFiles[0]));
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <>
            <StyledImage
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
            </StyledImage>
            {(mode === 'edit' || mode === 'registration') && (
              <StyledImageBtnWrapper mode={buttonMode}>
                <ButtonUpload
                  {...getInputProps()}
                  changeHandler={handleChange}
                />
              </StyledImageBtnWrapper>
            )}
          </>
        )}
      </Dropzone>
    </StyledImageWrapper>
  );
};

export default Image;
