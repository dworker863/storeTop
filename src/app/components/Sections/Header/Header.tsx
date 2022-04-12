import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Cart from '../../Blocks/Cart/Cart';
import Contacts from '../../Blocks/Contacts/Contacts';
import Container from '../../Blocks/Container/Container';
import NavMobile from '../../Blocks/NavMobile/NavMobile';
import Search from '../../Blocks/Search/Search';
import TopLine from '../../Blocks/TopLine/TopLine';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import { IHeader } from './IHeader';
import { StyledHeader } from './StyledHeader';

const Header: FC<IHeader> = ({ cart, authButtonHandler }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const username = useSelector((state: RootState) => state.auth.userName);

  const hamburgerClickHndler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <StyledHeader>
      <NavMobile
        isActive={hamburgerActive}
        username={username}
        authButtonHandler={authButtonHandler}
      />
      <Container type="header">
        <Hamburger
          hamburgerActive={hamburgerActive}
          clickHandler={hamburgerClickHndler}
        />
        <TopLine username={username} authButtonHandler={authButtonHandler} />
        <Contacts />
        <Search />
        <Cart cart={cart} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
