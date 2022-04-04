import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { ICategory } from './ICategory';
import { StyledCategory, StyledCategoryTitle } from './StyledCategory';

const Category: FC<ICategory> = ({ goods, title }) => {
  return (
    <StyledCategory>
      <Container type="common">
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
      </Container>
    </StyledCategory>
  );
};

export default Category;
