import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import Logo from '../../Elements/Logo/Logo';
import Nav from '../Nav/Nav';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC = () => {
  const username = useSelector((state: RootState) => state.auth.userName);

  console.log(username);

  return (
    <StyledTopLine>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      {username.length > 0 ? <Link to="/cabinet">{username}</Link> : 'Войти'}
    </StyledTopLine>
  );
};

export default TopLine;
