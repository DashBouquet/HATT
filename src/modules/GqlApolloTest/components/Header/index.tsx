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
        <Title>Hacker News</Title>
        <HackerLink to="/gql_apollo">new</HackerLink>
        <Separator>|</Separator>
        <HackerLink to="/gql_apollo/create">submit</HackerLink>
      </HeaderBox>
    </HeaderWrapper>
  );
};
