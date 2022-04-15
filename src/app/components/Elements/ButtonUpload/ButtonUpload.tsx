import { FC } from 'react';
import { IButtonUpload } from './IButtonUpload';
import { StyledButtonUpload } from './StyledButtonUpload';

const ButtonUpload: FC<IButtonUpload> = ({ changeHandler }) => {
  return (
    <StyledButtonUpload>
      Добавить изображение профиля
      <input type="file" style={{ display: 'none' }} onChange={changeHandler} />
    </StyledButtonUpload>
  );
};

export default ButtonUpload;
