import { FC, useState } from 'react';
import Cart from '../../Blocks/Cart/Cart';
import Contacts from '../../Blocks/Contacts/Contacts';
import Container from '../../Blocks/Container/Container';
import Search from '../../Blocks/Search/Search';
import TopLine from '../../Blocks/TopLine/TopLine';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const hamburgerClickHndler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <StyledHeader>
      <Container>
        <Hamburger
          hamburgerActive={hamburgerActive}
          clickHandler={hamburgerClickHndler}
        />
        <TopLine />
        <Contacts />
        <Search />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default Header;
