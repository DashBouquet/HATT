import styled from 'styled-components';
import { ButtonText } from 'typography';

export const Logo = styled.img`
  width: 25px;
  margin-right: 8px;
  border-radius: 100%;
`;

export const LogoutText = styled(ButtonText)`
  opacity: 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 41px;
  padding: 8px;
  overflow: hidden;
  color: white;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
  -webkit-transition: width 0.35s;
  transition: width 0.35s;
  &:hover {
    width: 100px;
  }
  &:hover > span {
    opacity: 0.9;
  }
`;
