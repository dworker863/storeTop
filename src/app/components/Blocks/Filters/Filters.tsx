import { FC } from 'react';
import { StyledField } from '../../../commonStyles/StyledField';
import Label from '../../Elements/Label/Label';
import {
  StyledFilterCheckbox,
  StyledFilters,
  StyledFiltersBlock,
  StyledFiltersTitle,
} from './StyledFilters';

const Filters: FC = () => {
  return (
    <StyledFilters>
      <StyledFiltersBlock>
        <StyledFiltersTitle>По цене</StyledFiltersTitle>
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="rich" text="Сначала дорогие" simple />
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="cheap" text="Сначала дешевые" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>По популярности</StyledFiltersTitle>
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="popular" text="Сначала популярные" simple />
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="new" text="Сначала новые товары" simple />
      </StyledFiltersBlock>
      <StyledFiltersBlock>
        <StyledFiltersTitle>Дополнительно</StyledFiltersTitle>
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="inStock" text="Только товары в наличии" simple />
        <StyledFilterCheckbox id="rich" name="rich" type="checkbox" />
        <Label id="rating" text="Только с высоким рейтингом" simple />
      </StyledFiltersBlock>
    </StyledFilters>
  );
};

export default Filters;
