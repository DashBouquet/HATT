import React, { FC } from 'react';
import {} from './styled';
import { routes } from '../../constants';
import { PageHeader } from 'antd';

export const CssWorkshop: FC = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Unknown Css Properties"
      breadcrumb={{ routes }}
      subTitle="workshop DB"
    />
  );
};
