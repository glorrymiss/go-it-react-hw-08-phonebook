import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterBack = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  background-color: #333333;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 32px;
`;

export const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.36;
  text-transform: uppercase;

  color: whitesmoke;
`;

export const LinkNetworks = styled(NavLink)`
  list-style: none;
  svg {
    width: 30px;
    height: 30px;
    fill: #ffffff;
    transition: fill 250ms linear;
    :hover {
      fill: orangered;
    }
  }
`;
