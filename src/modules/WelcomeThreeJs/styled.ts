import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RouteLink = styled(Link)`
  background-color: yellow;
  border: 1px solid grey;
  padding: 10px;
`;

export const Logout = styled.div`
  background-color: yellow;
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: blue;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
