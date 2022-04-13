import { FC } from 'react';
import FormOrder from '../../Blocks/FormOrder/FormOrder';
import ContactsItem from '../../Elements/ContactsItem/ContactsItem';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import {
  StyledOrder,
  StyledOrderDesc,
  StyledOrderFeedback,
  StyledOrderInfo,
  StyledOrderLine,
} from './StyledOrder';

const Order: FC = () => {
  return (
    <StyledOrder id="order">
      <StyledOrderInfo>
        <SectionTitle text="О магазине" primary={false} />
        <StyledOrderDesc>
          <TextOrange text="STORETOP" /> - это онлайн “магазин на диване”,
          созданный для тех кто хочет получить быстрый доступ в пределах
          комфорта своего комьютера или телефона.
        </StyledOrderDesc>
        <StyledOrderDesc>
          На страницах нашего магазина Вы сможете найти широкий спектр товаров,
          начиная от акссессуаров для мобильных телефонов и устройств, до
          подарков для Ваших родныхи близких, семьи и друзей.
        </StyledOrderDesc>
        <StyledOrderDesc>
          Мы стремимся к развитию, поэтому хотим создать удобную платформу для
          своих клиентов, с ценовой политикой подобранной под современный рынок.
        </StyledOrderDesc>
        <StyledOrderLine />
        <ContactsItem
          title="График работы"
          textFirst="Пн-Пт - с 09:00 до 17:00"
          textSecond="Сб-Вс - выходной"
          textCustom={true}
        />
        <ContactsItem
          title="Прием заказов онлайн"
          textFirst="Круглосуточно, обработка в рабочее время."
        />
      </StyledOrderInfo>
      <StyledOrderFeedback>
        <SectionTitle text="Хотите заказать обратный звонок?" primary={false} />
        <p>
          Вы можете заказать обратный звонок заполнив форму обратной связи ниже.
        </p>
        <p>Процесс не займет больше одной минуты.</p>
        <FormOrder />
      </StyledOrderFeedback>
    </StyledOrder>
  );
};

export default Order;
