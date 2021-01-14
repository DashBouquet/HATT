import React from 'react';
import {
  HeaderWrapper,
  HeaderBox,
  Title,
  HackerLink,
  Separator,
} from './styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBox>
        <Title>Hacker News </Title>
        <HackerLink to="/gql_apollo"> Links List</HackerLink>
        <Separator>|</Separator>
        <HackerLink to="/gql_apollo/create">Add New</HackerLink>
      </HeaderBox>
    </HeaderWrapper>
  );
};
