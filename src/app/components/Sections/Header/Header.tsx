import { FC } from 'react';
import Contacts from '../../Blocks/Contacts/Contacts';
import Container from '../../Blocks/Container/Container';
import TopLine from '../../Blocks/TopLine/TopLine';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <TopLine />
        <Contacts />
      </Container>
    </StyledHeader>
  );
};

export default Header;
