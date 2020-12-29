import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { SET_TOKEN } from '../../constants';
import { CssWorkshop } from '../CssWorkshop';
import Dashboard from '../Dashboard';
import { Login } from '../Login';
import { selectToken } from '../Login/selectors';
import { WelcomeThreeJs } from '../WelcomeThreeJs';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');
    dispatch({ type: SET_TOKEN, payload: loginToken });
  }, [dispatch]);
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={loginToken ? WelcomeThreeJs : Login} />
      <Route
        exact
        path="/dashboard"
        component={loginToken ? Dashboard : Login}
      />
      <Route
        exact
        path="/unknown_css"
        component={loginToken ? CssWorkshop : Login}
      />
    </Router>
  );
};
