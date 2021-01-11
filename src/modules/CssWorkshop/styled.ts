import styled from 'styled-components';
import { CssRuleDescription, CssRuleName, CurrRouteName } from 'typography';

export const RuleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
`;

export const Order = styled(CssRuleName)`
  min-width: 40px;
`;

export const Rule = styled(CssRuleName)`
  display: flex;
  align-items: flex-end;
  min-width: 30%;
`;

export const Description = styled.div`
  text-align: right;
  margin-right: 15px;
  min-width: 50%;
`;

//________________

export const Blockquote = styled(CurrRouteName)`
  color: red;
  margin-bottom: 30px;
  all: unset;
`;

export const BorderGradient = styled.div`
  width: 100px;
  height: 100px;
  border: 30px solid;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
`;

export const BorderImage = styled(BorderGradient)`
  border-image: url('http://usabili.ru/news_imgs/151/border7.png') 120 100 140
    fill / auto / 36px 30px 58px 28px repeat stretch;
`;

export const ImgWithBorder = styled.img`
  border: 45px solid transparent;
  border-image-source: url('//img-fotki.yandex.ru/get/9754/5091629.9a/0_7eb4a_a1904500_L.png');
  border-image-repeat: round;
  border-image-slice: 70 fill;
  border-radius: 50%;
`;

export const BoxDecBreakSlice = styled.span`
  box-decoration-break: slice;
  -webkit-box-decoration-break: slice;
  box-shadow: 6px 6px 5px 0 #ff1493, -5px -5px 5px 0 #00f, 5px 5px 15px 0 #ff0;
  background: linear-gradient(to bottom right, #fffd55, #387d22);
  padding: 0 1em;
  border-radius: 16px;
  border-style: solid;
  font: 16px sans-serif;
  line-height: 2;
`;

export const BoxDecBreakClone = styled(BoxDecBreakSlice)`
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

export const BreakExampleAfter = styled.div`
  background-color: #eee;
  padding: 5px;
  column-count: 3;
  column-rule: 2px dotted #ccc;
  & hr {
    break-after: column;
  }
`;

export const BreakExampleBefore = styled(BreakExampleAfter)`
  & hr {
    break-before: column;
  }
`;

export const Input = styled.input`
  caret-color: auto;
  display: block;
  width: 100%;
  padding: 3px;
  margin-bottom: 0.5em;
  font: 600 24px 'Montserrat', sans-serif;
`;
export const InputCustom = styled(Input)`
  caret-color: red;
`;

export const EditableP = styled(CssRuleDescription)`
  caret-color: green;
  text-align: left;
  padding: 8px 13px;
  width: 100%;
`;

export const ClipPath = styled.img`
  clip-path: polygon(50% 0px, 100% 50%, 50% 100%, 0px 50%);
  margin-left: 15px;
`;
export const ClipPath2 = styled(ClipPath)`
  clip-path: ellipse(130px 140px at 10% 20%);
`;
export const ClipPath3 = styled(ClipPath)`
  clip-path: circle(40%);
`;
