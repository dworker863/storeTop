import { Field, Form, Formik } from 'formik';
import { FC, useContext, useRef } from 'react';
import { SearchFilterContext } from '../../../../App';
import Label from '../../Elements/Label/Label';
import {
  StyledFilterCheckbox,
  StyledFilters,
  StyledFiltersBlock,
  StyledFiltersTitle,
} from './StyledFilters';

const Filters: FC = () => {
  const formValues = useRef(null);
  const setFilters = useContext(SearchFilterContext);

  const handleChange = (values: any) => {
    console.log(values);

    setFilters(values.begin, values.inStock, values.highRating);
  };

  return (
    <Formik
      initialValues={{
        begin: '',
        inStock: false,
        highRating: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ values }) => (
        <Form onInput={() => handleChange(values)}>
          <StyledFilters>
            <StyledFiltersBlock>
              <StyledFiltersTitle>По цене</StyledFiltersTitle>
              <StyledFilterCheckbox
                id="rich"
                name="begin"
                type="radio"
                value="rich"
              />
              <Label id="rich" text="Сначала дорогие" simple />
              <StyledFilterCheckbox
                id="cheap"
                name="begin"
                type="radio"
                value="cheap"
              />
              <Label id="cheap" text="Сначала дешевые" simple />
            </StyledFiltersBlock>
            <StyledFiltersBlock>
              <StyledFiltersTitle>По популярности</StyledFiltersTitle>
              <StyledFilterCheckbox
                id="popular"
                name="begin"
                type="radio"
                value="popular"
              />
              <Label id="popular" text="Сначала популярные" simple />
              <StyledFilterCheckbox
                id="new"
                name="begin"
                type="radio"
                value="new"
              />
              <Label id="new" text="Сначала новые товары" simple />
            </StyledFiltersBlock>
            <StyledFiltersBlock>
              <StyledFiltersTitle>Дополнительно</StyledFiltersTitle>
              <StyledFilterCheckbox
                id="inStock"
                name="inStock"
                type="checkbox"
              />
              <Label id="inStock" text="Только товары в наличии" simple />
              <StyledFilterCheckbox
                id="highRating"
                name="highRating"
                type="checkbox"
              />
              <Label id="highRating" text="Только с высоким рейтингом" simple />
            </StyledFiltersBlock>
          </StyledFilters>
        </Form>
      )}
    </Formik>
  );
};

export default Filters;
