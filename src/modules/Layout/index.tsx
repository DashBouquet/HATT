import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { SET_TOKEN } from '../../constants';
import { CssWorkshop } from '../CssWorkshop';
import Dashboard from '../Dashboard';
import { Login } from '../Login';

export const Layout: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');
    dispatch({ type: SET_TOKEN, payload: loginToken });
  }, [dispatch]);
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/unknown_css" component={CssWorkshop} />
    </Router>
  );
};
