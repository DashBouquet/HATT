import React, { FC } from 'react';
import { HeaderWrapper } from './styled';
import { Breadcrumb } from '../../constants';
import { PageHeader } from 'antd';
import { LogoutButton } from '../LogoutButton';

type Props = {
  title: string;
  subTitle: string;
  routes: Breadcrumb[];
};

export const AppHeader: FC<Props> = ({ title, subTitle, routes }) => {
  return (
    <HeaderWrapper>
      <PageHeader
        className="site-page-header"
        title={title}
        breadcrumb={{ routes }}
        subTitle={subTitle}
      />
      <LogoutButton />
    </HeaderWrapper>
  );
};
