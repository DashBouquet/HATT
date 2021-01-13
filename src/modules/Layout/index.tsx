import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Loader, PrivateRoute } from 'components';
import { AUTH_TOKEN, SET_TOKEN } from 'Constants';
import { CssWorkshop } from '../CssWorkshop';
import Dashboard from '../Dashboard';
import { selectToken } from '../LoginGQL/selectors';
import { WelcomeThreeJs } from '../WelcomeThreeJs';
import { GqlApolloTest } from 'modules/GqlApolloTest';
import { CreateLink } from 'modules/GqlApolloTest/components/CreateLink';
import { LoginGQL } from 'modules/LoginGQL';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem(AUTH_TOKEN);
    dispatch({ type: SET_TOKEN, payload: loginToken });
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Switch>
      <PrivateRoute
        path="/"
        exact
        isLoggedIn={!!loginToken}
        component={WelcomeThreeJs}
      />
      <PrivateRoute
        exact
        path="/dashboard"
        isLoggedIn={!!loginToken}
        component={Dashboard}
      />
      <PrivateRoute
        exact
        path="/unknown_css"
        isLoggedIn={!!loginToken}
        component={CssWorkshop}
      />
      <PrivateRoute
        exact
        path="/gql_apollo"
        isLoggedIn={!!loginToken}
        component={GqlApolloTest}
      />
      <PrivateRoute
        exact
        path="/gql_apollo/create"
        isLoggedIn={!!loginToken}
        component={CreateLink}
      />
      <Route exact path="/login" component={LoginGQL} />
    </Switch>
  );
};
