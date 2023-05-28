import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/user/user-operation';
import { Button, Form, Input, Label, Title } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Title>Please, register here</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Username
          <Input
            type="text"
            name="name"
            placeholder="Elsa Roise"
            required
            onChange={event => setName(event.target.value)}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="elsa@gmail.com"
            required
            onChange={event => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            required
            onChange={event => setPassword(event.target.value)}
          />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default RegisterForm;
