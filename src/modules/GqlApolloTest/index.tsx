import { AppHeader, CreateLink } from 'components';
import { routesGql } from 'Constants';
import React, { FC } from 'react';
import { PageWrapper } from 'typography';
import { LinkList } from './components/LinkList';
import {} from './styled';

export const GqlApolloTest: FC = () => {
  return (
    <PageWrapper>
      <AppHeader
        title="Hacker News Clone"
        subTitle="howtographql.com/react-apollo"
        routes={routesGql}
      />
      <LinkList />
      <CreateLink />
    </PageWrapper>
  );
};
