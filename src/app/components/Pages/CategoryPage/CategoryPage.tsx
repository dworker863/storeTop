import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { ICategory } from './ICategoryPage';
import { StyledCategory, StyledCategoryTitle } from './StyledCategoryPage';

const Category: FC<ICategory> = ({ goods, title }) => {
  return (
    <Container type="common">
      <StyledCategory>
        <StyledCategoryTitle>{title}</StyledCategoryTitle>
        {goods.map((good, index) => (
          <GoodsItem
            key={index + good.name}
            title={good.name}
            desc={good.description}
            price={good.price}
            favorite={false}
            discount={good.discount}
            hit={good.hit}
          />
        ))}
      </StyledCategory>
    </Container>
  );
};

export default Category;
