import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import logo from 'assets/images/dblogo.png';
import { logOut } from '../../utils/api/loginApi';
import { Button, Logo, LogoutText } from './styled';

export const LogoutButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => logOut(dispatch)}>
      <Logo src={logo} />

      <LogoutText>LOGOUT</LogoutText>
    </Button>
  );
};
