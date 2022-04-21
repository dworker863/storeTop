import { ChangeEvent, FC } from 'react';
import Button from '../../Elements/Button/Button';
import {
  StyledButtonWrapper,
  StyledSearch,
  StyledSearchIcon,
  StyledSearchInput,
} from './StyledSearch';
import searchIcon from '../../../../assets/images/search-icon.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchGoods,
  setSearchString,
} from '../../../redux/reducers/search/searchReducer';
import Filters from '../Filters/Filters';
import { RootState } from '../../../redux/store';
import { IGood } from '../../../commonInterfaces/IGood';

const Search: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchStr = useSelector((state: RootState) => state.search.value);
  const goods = useSelector((state: RootState) => state.goods);
  const goodsArr = [...goods.electronics, ...goods.cosmetics];

  const addSearchGoods = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(event.target.value.trim()));

    const searchRegExp = new RegExp(`^${event.target.value.trim()}`);

    const searchGoods = goodsArr.filter((good: IGood) =>
      searchRegExp.test(good.name),
    );
    console.log(searchGoods);

    dispatch(setSearchGoods(searchGoods));
    navigate('/search');
  };

  return (
    <StyledSearch>
      <StyledSearchIcon src={searchIcon} alt="Лупа" />
      <StyledSearchInput
        type="search"
        placeholder="Поиск товара"
        onChange={addSearchGoods}
      />
      <StyledButtonWrapper>
        <Button text="Поиск" />
      </StyledButtonWrapper>
      <Filters />
    </StyledSearch>
  );
};

export default Search;
