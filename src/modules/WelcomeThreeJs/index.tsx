import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../utils/api/loginApi';
import { RouteLink, Logout, ButtonText, HeaderWrapper } from './styled';

export const WelcomeThreeJs: FC = () => {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <RouteLink to="/dashboard">
        <ButtonText>R&M DASHBOARD</ButtonText>
      </RouteLink>
      <RouteLink to="/unknown_css">
        <ButtonText>UNKNOWN CSS WORKSHOP</ButtonText>
      </RouteLink>
      <Logout onClick={() => logOut(dispatch)}>
        <ButtonText>LOG OUT</ButtonText>
      </Logout>
    </HeaderWrapper>
  );
};
