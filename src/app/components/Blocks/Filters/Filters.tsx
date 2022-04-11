import { FC } from 'react';
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
        <Label id="reach" text="Сначала дорогие" simple />
        <Label id="cheap" text="Сначала дешевые" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>По популярности</StyledFiltersTitle>
        <Label id="popular" text="Сначала популярные" simple />
        <Label id="new" text="Сначала новые товары" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>Дополнительно</StyledFiltersTitle>
        <Label id="inStock" text="Только товары в наличии" simple />
        <Label id="rating" text="Только с высоким рейтингом" simple />
      </StyledFiltersBlock>
    </StyledFilters>
  );
};

export default Filters;
