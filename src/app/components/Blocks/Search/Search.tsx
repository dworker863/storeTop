import { FC } from 'react';
import Button from '../../Elements/Button/Button';
import {
  StyledButtonWrapper,
  StyledSearch,
  StyledSearchIcon,
  StyledSearchInput,
} from './StyledSearch';
import searchIcon from '../../../../assets/images/search-icon.png';

const Search: FC = () => {
  return (
    <StyledSearch>
      <StyledSearchInput type="search" placeholder="Поиск товара на сайте" />
      <StyledButtonWrapper>
        <Button text="Поиск" />
      </StyledButtonWrapper>
      <StyledSearchIcon src={searchIcon} alt="Лупа" />
    </StyledSearch>
  );
};

export default Search;
