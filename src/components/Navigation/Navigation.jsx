import { useSelector } from 'react-redux';
import { Container, StyledLink, Wrap } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/user/user-selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>

      <Wrap>
        {!isLogin && <StyledLink to="/register">Register</StyledLink>}
        {!isLogin && <StyledLink to="/login">Login</StyledLink>}
        {isLogin && <UserMenu />}
        {isLogin && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Wrap>
    </Container>
  );
};

export default Navigation;
