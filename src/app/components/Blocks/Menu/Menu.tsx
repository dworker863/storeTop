import { FC } from 'react';
import { menuData } from '../../../utils/staticData';
import NavItem from '../../Elements/NavItem/NavItem';
import { StyledMenu, StyledMenuWrapper } from './StyledMenu';

const Menu: FC = () => {
  return (
    <StyledMenuWrapper>
      <StyledMenu>
        {menuData.map((text, index) => (
          <NavItem key={index + text} text={text} type="desktop" />
        ))}
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

export default Menu;
