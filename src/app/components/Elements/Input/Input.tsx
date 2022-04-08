import { FC } from 'react';
import { IInput } from './IInput';
import { StyledInput } from './StyledInput';

const Input: FC<IInput> = ({ type, name, placeholder, width, onChange }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{ width }}
    />
  );
};

export default Input;
