import React, { FC } from 'react';
import { PageWrapper, GridContainer } from './styled';
import { routesCss, cssRulesArray } from '../../constants';
import { AppHeader } from '../../components/AppHeader';

export const CssWorkshop: FC = () => {
  return (
    <PageWrapper>
      <AppHeader
        title="Unknown Css Properties"
        subTitle="workshop DB"
        routes={routesCss}
      />
      <GridContainer>
        {cssRulesArray.map((item: string, i: number) => {
          return (
            <span key={`rule${i}`}>
              {i + 1}. {item}
            </span>
          );
        })}
      </GridContainer>
    </PageWrapper>
  );
};
