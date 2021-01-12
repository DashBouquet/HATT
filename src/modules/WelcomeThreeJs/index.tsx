import React, { FC } from 'react';
import { LogoutButton } from 'components/LogoutButton';
import { ButtonText, PageWrapper, HeaderWrapper } from 'typography';

import { RouteLink } from './styled';

export const WelcomeThreeJs: FC = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <RouteLink to="/dashboard">
          <ButtonText>R&M DASHBOARD</ButtonText>
        </RouteLink>
        <RouteLink to="/unknown_css">
          <ButtonText>UNKNOWN CSS WORKSHOP</ButtonText>
        </RouteLink>
        <RouteLink to="/gql_apollo">
          <ButtonText>HACKER NEWS</ButtonText>
        </RouteLink>
        <LogoutButton />
      </HeaderWrapper>
    </PageWrapper>
  );
};
