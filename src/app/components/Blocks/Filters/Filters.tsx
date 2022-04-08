import { FC } from 'react';
import Input from '../../Elements/Input/Input';
import Label from '../../Elements/Label/Label';
import {
  StyledFilters,
  StyledFiltersBlock,
  StyledFiltersTitle,
} from './StyledFilters';

const Filters: FC = () => {
  return (
    <StyledFilters>
      <StyledFiltersBlock>
        <StyledFiltersTitle>По цене</StyledFiltersTitle>
        <Input id="reach" type="checkbox" name="reach" inline />
        <Label id="reach" text="Сначала дорогие" simple />
        <Input id="cheap" type="checkbox" name="cheap" inline />
        <Label id="cheap" text="Сначала дешевые" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>По популярности</StyledFiltersTitle>
        <Input id="popular" type="checkbox" name="popular" inline />
        <Label id="popular" text="Сначала популярные" simple />
        <Input id="new" type="checkbox" name="new" inline />
        <Label id="new" text="Сначала новые товары" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>Дополнительно</StyledFiltersTitle>
        <Input id="inStock" type="checkbox" name="inStock" inline />
        <Label id="inStock" text="Только товары в наличии" simple />
        <Input id="rating" type="checkbox" name="rating" inline />
        <Label id="rating" text="Только с высоким рейтингом" simple />
      </StyledFiltersBlock>
    </StyledFilters>
  );
};

export default Filters;
