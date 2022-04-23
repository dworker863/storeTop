import { FC } from 'react';
import { IButtonUpload } from './IButtonUpload';
import { StyledButtonUpload } from './StyledButtonUpload';

const ButtonUpload: FC<IButtonUpload> = ({ changeHandler, mode }) => {
  return (
    <StyledButtonUpload>
      {mode === 'registration' && 'Добавить изображение профиля'}
      {mode === 'edit' && 'Изменить изображение профиля'}
      <input type="file" style={{ display: 'none' }} onChange={changeHandler} />
    </StyledButtonUpload>
  );
};

export default ButtonUpload;
