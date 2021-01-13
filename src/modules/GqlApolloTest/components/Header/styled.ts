import styled from 'styled-components';
import { CssRuleName, LinkText } from 'typography';

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  white-space: nowrap;
  background-color: #ff6600;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Title = styled(CssRuleName)`
  margin-right: 8px;
`;

export const HackerLink = styled(LinkText)`
  color: #000000;
`;

export const Separator = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;
