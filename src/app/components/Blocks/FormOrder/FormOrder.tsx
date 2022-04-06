import { FC } from 'react';
import { StyledForm } from '../../../commonStyles/StyledForm';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Label from '../../Elements/Label/Label';

const FormOrder: FC = () => {
  return (
    <StyledForm>
      <Label id="#name" text="Ваше имя и фамилия" />
      <Input id="name" type="text" name="name" placeholder="Имя и фамилия" />
      <Label id="#phone" text="Номер мобильного телефона для связи" />
      <Input id="phone" type="text" name="phone" placeholder="+7" />
      <Label id="#email" text="Адрес электронной почты" /> (опционально)
      <Input id="email" type="email" name="email" placeholder="E-mail адрес" />
      <Button type="submit" text="Отправить заявку" />
    </StyledForm>
  );
};

export default FormOrder;
