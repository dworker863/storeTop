import { FC } from 'react';
import { StyledHiddenCard } from '../../../commonStyles/StyledHiddenCard';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { StyledGoodsWrapper } from '../../Elements/GoodsWrapper/StyledGoodsWrapper';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ICategoryPage } from './ICategoryPage';
import { StyledCategory } from './StyledCategoryPage';

const CategoryPage: FC<ICategoryPage> = ({ goods, title, user }) => {
  return (
    <Container type="common">
      <StyledCategory>
        <SectionTitle primary={false} text={title} />
        <StyledGoodsWrapper>
          {goods.map((good, index) => (
            <GoodsItem key={index + good.name} good={good} user={user} />
          ))}
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
        </StyledGoodsWrapper>
      </StyledCategory>
    </Container>
  );
};

export default CategoryPage;
