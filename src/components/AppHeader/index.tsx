import React, { FC } from 'react';
import { HeaderWrapper } from './styled';
import { Breadcrumb } from '../../constants';
import { LogoutButton } from '../LogoutButton';

type Props = {
  title: string;
  subTitle: string;
  routes: Breadcrumb[];
};

export const AppHeader: FC<Props> = ({ title, subTitle, routes }) => {
  return (
    <HeaderWrapper>
      <div>
        <div></div>
        <div>
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>
      </div>
      <LogoutButton />
    </HeaderWrapper>
  );
};
