import React, { FC } from 'react';
import { WorkshopHeaderWrapper, TitlesWrapper } from './styled';
import { CurrRouteName, LinkText, PageSubTitle, PageTitle } from 'typography';
import { LogoutButton } from '../LogoutButton';
import { Breadcrumb } from 'types';

type Props = {
  title: string;
  subTitle: string;
  routes: Breadcrumb[];
};

export const AppHeader: FC<Props> = ({ title, subTitle, routes }) => {
  return (
    <WorkshopHeaderWrapper>
      <div>
        <div>
          {routes.map(({ path, breadcrumbName }, i) => {
            if (i + 1 === routes.length)
              return (
                <CurrRouteName key={`${breadcrumbName}${i}`}>
                  {breadcrumbName}
                </CurrRouteName>
              );
            return (
              <span key={`${breadcrumbName}${i}`}>
                <LinkText to={path}>{breadcrumbName}</LinkText>
                <CurrRouteName> /</CurrRouteName>
              </span>
            );
          })}
        </div>
        <TitlesWrapper>
          <PageTitle>{title}</PageTitle>
          <PageSubTitle>{subTitle}</PageSubTitle>
        </TitlesWrapper>
      </div>
      <LogoutButton />
    </WorkshopHeaderWrapper>
  );
};
