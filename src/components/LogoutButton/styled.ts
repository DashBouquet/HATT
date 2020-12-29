import styled from 'styled-components';

export const Logo = styled.img`
  width: 25px;
  margin-right: 8px;
  border-radius: 100%;
`;

export const LogoutText = styled.span`
  overflow: hidden;
  font-size: 0.8em;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 3px;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.45s;
  opacity: 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 41px;
  margin: 12px;
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
