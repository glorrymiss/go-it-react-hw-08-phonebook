import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  color: whitesmoke;
`;

export const Button = styled.button`
  width: 180px;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(204, 0, 0);
  color: whitesmoke;
  border: transparent;
  border-radius: 8px;
  transition: background-color 250ms linear;
  :hover {
    background-color: orangered;
  }
`;

export const Title = styled.h2`
  color: whitesmoke;
  font-size: 32px;
`;

export const Input = styled.input`
  background-color: #f3ffff;
`;
