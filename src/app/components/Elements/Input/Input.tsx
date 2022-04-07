import { FC } from 'react';
import { IInput } from './IInput';
import { StyledInput } from './StyledInput';

const Input: FC<IInput> = ({ type, name, placeholder, onChange }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
