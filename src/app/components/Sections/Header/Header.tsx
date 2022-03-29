import { FC } from 'react';
import Cart from '../../Blocks/Cart/Cart';
import Contacts from '../../Blocks/Contacts/Contacts';
import Container from '../../Blocks/Container/Container';
import Search from '../../Blocks/Search/Search';
import TopLine from '../../Blocks/TopLine/TopLine';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <TopLine />
        <Contacts />
        <Search />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default Header;
