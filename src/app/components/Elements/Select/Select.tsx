import { FC } from 'react';
import { ISelect } from './ISelect';
import { StyledSelect } from './StyledSelect';

const Select: FC<ISelect> = ({ id, optionValue, changeHandler }) => {
  return (
    <StyledSelect id={id} onChange={changeHandler}>
      {optionValue.map((value, index) => (
        <option key={index + value}>{value}</option>
      ))}
    </StyledSelect>
  );
};

export default Select;
