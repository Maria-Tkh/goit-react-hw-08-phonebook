import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import authOperations from '../redux/auth/auth-operations';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
