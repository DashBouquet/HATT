import React, { FC } from 'react';
import { PageWrapper } from './styled';
import { routesCss } from '../../constants';
import { AppHeader } from '../../components/AppHeader';

export const CssWorkshop: FC = () => {
  return (
    <PageWrapper>
      <AppHeader
        title="Unknown Css Properties"
        subTitle="workshop DB"
        routes={routesCss}
      />
    </PageWrapper>
  );
};
