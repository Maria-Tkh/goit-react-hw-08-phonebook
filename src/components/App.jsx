import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import { authOperations } from './redux/auth/auth-operations';

import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        {/* <Route exact path="/" component={HomeView}/> */}
        {/* <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} /> */}
        {/* <Route exact path="/contacts" component={ContactsView} /> */}
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
      </Switch>
    </Container>
  );
};

export default App;
