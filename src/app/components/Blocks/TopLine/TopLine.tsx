import { FC } from 'react';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC = () => {
  return (
    <StyledTopLine>
      <Logo />
      <Nav />
    </StyledTopLine>
  );
};

export default TopLine;
