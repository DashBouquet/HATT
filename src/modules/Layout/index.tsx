import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loader, PrivateRoute } from 'components';
import { SET_TOKEN } from 'Constants';
import { CssWorkshop } from '../CssWorkshop';
import Dashboard from '../Dashboard';
import { Login } from '../Login';
import { selectToken } from '../Login/selectors';
import { WelcomeThreeJs } from '../WelcomeThreeJs';
import { GqlApolloTest } from 'modules/GqlApolloTest';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');
    dispatch({ type: SET_TOKEN, payload: loginToken });
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          isLoggedIn={!!loginToken}
          component={WelcomeThreeJs}
        />
        <PrivateRoute
          path="/dashboard"
          isLoggedIn={!!loginToken}
          component={Dashboard}
        />
        <PrivateRoute
          path="/unknown_css"
          isLoggedIn={!!loginToken}
          component={CssWorkshop}
        />
        <PrivateRoute
          path="/gql_apollo"
          isLoggedIn={!!loginToken}
          component={GqlApolloTest}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
