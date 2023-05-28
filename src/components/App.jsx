import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RegisterRoute/RegisterRoute';
import { refreshUser } from 'redux/user/user-operation';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../../src/pages/HomePage'));
const Login = lazy(() => import('../../src/pages/Login'));
const Register = lazy(() => import('../../src/pages/Register'));
const Contacts = lazy(() => import('../../src/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
