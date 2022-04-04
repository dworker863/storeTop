import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC = () => {
  return (
    <StyledTopLine>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </StyledTopLine>
  );
};

export default TopLine;
