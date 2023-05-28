import styled from '@emotion/styled';

export const WrapMenu = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 6px;

  align-items: center;
  justify-content: center;
`;

export const TextUser = styled.h2`
  font-size: 24px;

  color: whitesmoke;
`;

export const Button = styled.button`
  width: 60px;
  font-size: 14px;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(204, 0, 0);
  color: whitesmoke;
  border: transparent;
  border-radius: 4px;
  transition: background-color 250ms linear;
  :hover {
    background-color: orangered;
  }
`;
