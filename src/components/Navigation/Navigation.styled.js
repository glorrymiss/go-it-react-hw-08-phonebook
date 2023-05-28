import styled from '@emotion/styled';
const { NavLink } = require('react-router-dom');

export const Container = styled.div`
  background-color: #333333;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 40px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 26px;

  color: whitesmoke;
  margin-left: 60px;
  transition: color 250ms linear;

  :hover {
    color: orangered;
  }
`;
