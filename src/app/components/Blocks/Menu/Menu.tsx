import { FC } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../../Elements/NavItem/NavItem';
import { IMenu } from './IMenu';
import { StyledMenu, StyledMenuWrapper } from './StyledMenu';

const Menu: FC<IMenu> = ({ categories }) => {
  return (
    <StyledMenuWrapper>
      <StyledMenu>
        {categories.map((category, index) => (
          <Link key={index + category} to={`goods/${category}`}>
            <NavItem text={category} type="desktop" className="menuItem" />
          </Link>
        ))}
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

export default Menu;
