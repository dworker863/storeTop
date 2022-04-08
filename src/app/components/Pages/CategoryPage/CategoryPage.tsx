import { FC } from 'react';
import { StyledHiddenCard } from '../../../commonStyles/StyledHiddenCard';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { StyledGoodsWrapper } from '../../Elements/GoodsWrapper/StyledGoodsWrapper';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ICategory } from './ICategoryPage';
import { StyledCategory } from './StyledCategoryPage';

const Category: FC<ICategory> = ({ goods, title }) => {
  return (
    <Container type="common">
      <StyledCategory>
        <SectionTitle primary={false} text={title} />
        <StyledGoodsWrapper>
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
          <StyledHiddenCard></StyledHiddenCard>
        </StyledGoodsWrapper>
      </StyledCategory>
    </Container>
  );
};

export default Category;
