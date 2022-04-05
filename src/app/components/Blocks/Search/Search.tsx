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
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/reducers/search/searchReducer';

const Search: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchBarKeyPressHandler = (event: ChangeEvent<HTMLInputElement>) => {
    navigate('/search');
    dispatch(setSearch(event.target.value.trim()));
  };

  return (
    <StyledSearch>
      <StyledSearchIcon src={searchIcon} alt="Лупа" />
      <StyledSearchInput
        type="search"
        placeholder="Поиск товара"
        onChange={searchBarKeyPressHandler}
      />
      <StyledButtonWrapper>
        <Button text="Поиск" />
      </StyledButtonWrapper>
    </StyledSearch>
  );
};

export default Search;
