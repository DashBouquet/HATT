import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../utils/api/loginApi';
import { Logo, LogoutText } from './styled';
import './styles.css';

export const LogoutButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="button" onClick={() => logOut(dispatch)}>
      <Logo src="https://avatars3.githubusercontent.com/u/10573733?s=200&v=4" />

      <LogoutText>LOGOUT</LogoutText>
      {/* <div className="logout">LOGOUT</div> */}
    </div>
  );
};
