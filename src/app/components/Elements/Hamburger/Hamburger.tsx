import { FC } from 'react';
import { IHamburgerProps } from './IHamburger';
import { HamburgerWrapper, StyledHamburger } from './StyledHamburger';

const Hamburger: FC<IHamburgerProps> = ({ clickHandler, hamburgerActive }) => {
  return (
    <HamburgerWrapper onClick={clickHandler}>
      <StyledHamburger isActive={hamburgerActive} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
