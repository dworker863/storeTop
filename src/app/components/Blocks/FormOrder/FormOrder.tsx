import { FC } from 'react';
import { StyledForm } from '../../../commonStyles/StyledForm';
import Button from '../../Elements/Button/Button';
import Label from '../../Elements/Label/Label';

const FormOrder: FC = () => {
  return (
    <StyledForm>
      <Label id="#name" text="Ваше имя и фамилия" />
      <Label id="#phone" text="Номер мобильного телефона для связи" />
      <Label id="#email" text="Адрес электронной почты" /> (опционально)
      <Button type="submit" text="Отправить заявку" />
    </StyledForm>
  );
};

export default FormOrder;
