import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.main`
  padding: 24px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrRouteName = styled.span`
  font: 600 18px/22px 'Oswald', sans-serif;
  letter-spacing: 3px;
  margin-right: 5px;
`;

export const LinkText = styled(Link)`
  font: 600 18px/22px 'Oswald', sans-serif;
  letter-spacing: 3px;
`;

export const CssRuleName = styled.span`
  font: 600 24px 'Oswald', sans-serif;
  letter-spacing: 3px;
`;

export const CssRuleDescription = styled.span`
  font: 400 16px 'Montserrat', sans-serif;
`;

export const CssRuleDeprecated = styled(CssRuleDescription)`
  color: red;
`;

export const CssRuleExperimental = styled(CssRuleDescription)`
  color: orange;
`;

export const PageTitle = styled.h2`
  font: 600 28px 'Oswald', sans-serif;
  margin-bottom: 0;
  letter-spacing: 3px;
`;

export const PageSubTitle = styled.h3`
  font: 400 24px 'Oswald', sans-serif;
  letter-spacing: 3px;
  margin-bottom: 0;
  margin-left: 20px;
`;

export const ButtonText = styled.span`
  overflow: hidden;
  font-size: 1em;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 3px;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.45s;
  user-select: none;
`;
