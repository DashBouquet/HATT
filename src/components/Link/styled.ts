import styled from 'styled-components';
import { CssRuleName, CssRuleDescription } from 'typography';

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: flex-start;
`;

export const CommonInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Order = styled(CssRuleName)`
  min-width: 40px;
`;

export const Vote = styled.span`
  margin-right: 1rem;
  color: #828282;
  font-size: 20px;
  cursor: pointer;
`;

export const ExtraInfoWrapper = styled(CssRuleDescription)`
  color: #828282;
  line-height: 1.5;
`;
