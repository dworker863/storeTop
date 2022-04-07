import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import AuthorizedButtons from '../../Elements/AuthorizedButtons/AuthorizedButtons';
import Logo from '../../Elements/Logo/Logo';
import UnauthorizedButtons from '../../Elements/UnauthorizedButtons/UnauthorizedButtons';
import Nav from '../Nav/Nav';
import { ITopLine } from './ITopLine';
import { StyledTopLine } from './StyledTopLine';

const TopLine: FC<ITopLine> = ({ authButtonHandler }) => {
  const username = useSelector((state: RootState) => state.auth.userName);

  return (
    <StyledTopLine>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      {username.length > 0 ? (
        <AuthorizedButtons
          username={username}
          authButtonHandler={authButtonHandler}
        />
      ) : (
        <UnauthorizedButtons authButtonHandler={authButtonHandler} />
      )}
    </StyledTopLine>
  );
};

export default TopLine;
