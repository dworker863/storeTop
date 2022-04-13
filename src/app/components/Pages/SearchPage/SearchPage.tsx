import { FC } from 'react';
import { IGoods } from '../../../commonInterfaces/IGoods';
import { StyledHiddenCard } from '../../../commonStyles/StyledHiddenCard';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { StyledGoodsWrapper } from '../../Elements/GoodsWrapper/StyledGoodsWrapper';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { StyledSearchPage } from './StyledSearchPage';

const SearchPage: FC<IGoods> = ({ goods }) => {
  return (
    <Container type="common">
      <StyledSearchPage>
        <SectionTitle text="SearchPage" primary={false} />
        <StyledGoodsWrapper>
          {goods.map((good, index) => (
            <GoodsItem key={index + good.name} good={good} />
          ))}
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
          <StyledHiddenCard></StyledHiddenCard>
        </StyledGoodsWrapper>
      </StyledSearchPage>
    </Container>
  );
};

export default SearchPage;
