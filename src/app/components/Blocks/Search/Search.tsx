import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import {
  StyledButtonWrapper,
  StyledSearch,
  StyledSearchIcon,
  StyledSearchInput,
} from './StyledSearch';
import searchIcon from '../../../../assets/images/search-icon.png';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const goods = useSelector((state: RootState) => state.goods);

  const searchBarKeyPressHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
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
