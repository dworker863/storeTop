import { FC } from 'react';
import { StyledHiddenCard } from '../../../commonStyles/StyledHiddenCard';
import Container from '../../Blocks/Container/Container';
import GoodsItem from '../../Blocks/GoodsItem/GoodsItem';
import { StyledGoodsWrapper } from '../../Elements/GoodsWrapper/StyledGoodsWrapper';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import { ISearchPage } from './ISearchPage';
import { StyledSearchPage } from './StyledSearchPage';

const SearchPage: FC<ISearchPage> = ({ goods, user }) => {
  return (
    <Container type="common">
      <StyledSearchPage>
        <SectionTitle text="SearchPage" primary={false} />
        <StyledGoodsWrapper>
          {goods.map((good, index) => (
            <GoodsItem key={index + good.name} good={good} user={user} />
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
