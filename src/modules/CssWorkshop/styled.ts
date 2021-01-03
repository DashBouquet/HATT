import styled from 'styled-components';

export const PageWrapper = styled.div`
  /* padding: 20px; */
`;
export const MainWrapper = styled.main`
  padding: 24px;
`;
export const RuleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid grey;
`;
export const Rule = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 3px;
  min-width: 30%;
`;
export const Order = styled.p`
  width: 40px;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 3px;
`;
export const Description = styled.div`
  text-align: right;
  margin-right: 15px;
`;

//________________

export const Blockquote = styled.blockquote`
  all: unset;
  color: red;
`;

export const Syntax = styled.span`
  color: orange;
  margin-top: 55px;
`;
export const Img = styled.img`
  width: 400px;
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
export const CaptionSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
