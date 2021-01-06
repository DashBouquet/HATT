import React, { FC } from 'react';
import { Logout } from './styled';
import { routesCss as routes } from '../../constants';
import { PageHeader } from 'antd';
import { useDispatch } from 'react-redux';
import { logOut } from '../../utils/api/loginApi';

export const CssWorkshop: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Logout onClick={() => logOut(dispatch)}>LOG OUT</Logout>
    </>
  );
};
