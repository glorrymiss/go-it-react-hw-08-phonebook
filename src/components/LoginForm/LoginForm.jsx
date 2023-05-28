import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/user-operation';
import { Button, Form, Input, Label, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogInSubmit = event => {
    event.preventDefault();

    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Title> Please, enter your detals :</Title>
      <Form autoComplete="on" onSubmit={handleLogInSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};

export default LoginForm;
