import React, { FC } from 'react';
import {
  Img,
  Syntax,
  Blockquote,
  Description,
  MainWrapper,
  Order,
  PageWrapper,
  Rule,
  RuleWrapper,
  BorderImage,
  BorderGradient,
  ImgWithBorder,
  BoxDecBreakClone,
  BoxDecBreakSlice,
  BreakExampleAfter,
  BreakExampleBefore,
  CaptionSideWrapper,
  Input,
  InputCustom,
  EditableP,
  ClipPath,
  ClipPath2,
  ClipPath3,
} from './styled';
import { routesCss, cssRulesArray } from '../../constants';
import { AppHeader } from '../../components/AppHeader';
import azimuth from '../../assets/images/azimuth.png';
import bleed from '../../assets/images/bleed.png';
import jedais from '../../assets/images/jedais.jpg';
import captionside from '../../assets/images/captionside.png';
import baloon from '../../assets/images/balloon-small.jpg';

export const CssWorkshop: FC = () => {
  return (
    <PageWrapper>
      <AppHeader
        title="Unknown Css Properties"
        subTitle="workshop DB"
        routes={routesCss}
      />
      <MainWrapper>
        <RuleWrapper>
          <Rule>
            <Order>1.</Order>all
          </Rule>

          <Description>
            The all shorthand CSS property resets almost all of an element`s
            properties.
            <br />
            <Blockquote id="quote">Blockquote with all:</Blockquote> unset. Also
            can be <Blockquote id="quote">inherit, initial, revert</Blockquote>.
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>2.</Order>azimuth
          </Rule>
          <Description>
            Deprecated. In combination with elevation, the azimuth CSS property
            enables different audio sources to be positioned spatially for aural
            presentation.
            <br />
            <strong>Syntax: </strong>
            <Syntax>
              angle | [ [ left-side | far-left | left | center-left | center |
              center-right | right | far-right | right-side ] || behind ] |
              leftwards | rightwards
            </Syntax>
            <Img src={azimuth} />
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>3.</Order>bleed
          </Rule>
          <Description>
            Experimental. The bleed property in CSS is for specifying space
            outside of the page box boundary when determining the size of a
            printed page.
            <br />
            <strong>Syntax: </strong>
            <Syntax>auto | length (cm/pt)</Syntax>
            <Img src={bleed} />
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>4.</Order> border-image
          </Rule>
          <BorderGradient />
          <BorderImage />
          <ImgWithBorder src={jedais} />
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>5.</Order> box-decoration-break
          </Rule>
          <Description>
            <BoxDecBreakSlice>
              The box-decoration-break CSS <br /> property specifies how an
              element`s <br />
            </BoxDecBreakSlice>
            <BoxDecBreakClone>
              fragments should be rendered when <br />
              broken across multiple lines, columns, or pages.
            </BoxDecBreakClone>
            <br />
            <strong>Syntax: </strong>
            <Syntax>slice | clone | initial | inherit | unset</Syntax>
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>6.</Order> break-(after/before/inside)
          </Rule>
          <Description>
            <BreakExampleAfter>
              (After) This CSS properties sets how
              <hr /> page, column, or region breaks should behave before a
              generated box. If there is no generated box, the property is
              ignored.
            </BreakExampleAfter>
            <br />
            <BreakExampleBefore>
              (Before) If there is no generated box, the property is ignored.
              <hr />
              Some sources claim that this property is obsolete.ere is no
              generated box, the property is ignored.
            </BreakExampleBefore>
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>7.</Order> caption-side
          </Rule>
          <Description>
            <CaptionSideWrapper>
              <span>
                The caption-side property specifies the placement of a table
                caption. Usually used on the table tag.
              </span>
              <img src={captionside} width={600} />
            </CaptionSideWrapper>
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>8.</Order> caret-color
          </Rule>
          <Description>
            <Input value="This field uses a default caret." />
            <InputCustom className="custom" value="I have red caret color!" />
            <EditableP contentEditable>I have green caret color!</EditableP>
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>9.</Order> clear
          </Rule>
          <Description>
            The clear CSS property sets whether an element must be moved below
            (cleared) floating elements that precede it. The clear property
            applies to floating and non-floating elements. Relevant for
            supporting old browsers or working with old code.
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>10.</Order> clip (clip-path)
          </Rule>
          <Description>
            <CaptionSideWrapper>
              <span>
                This property creates a clipping region that sets what part of
                an element should be shown. Parts that are inside the region are
                shown, while those outside are hidden. Can be used with HTML and
                SVG.{' '}
              </span>
              <ClipPath src={baloon} width="130" />
              <ClipPath2 src={baloon} width="130" />
              <ClipPath3 src={baloon} width="130" />
            </CaptionSideWrapper>
          </Description>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>11.</Order> color-interpolation-filters
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>13.</Order> column-count
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>15.</Order> column-fill
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>16.</Order> column-gap
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>17.</Order> column-rule
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>18.</Order> column-rule-color
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>19.</Order> column-rule-style
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>20.</Order> column-rule-width
          </Rule>
          <div>example1</div>
        </RuleWrapper>
        <RuleWrapper>
          <Rule>
            <Order>21.</Order> column-span
          </Rule>
          <div>example1</div>
        </RuleWrapper>
      </MainWrapper>
    </PageWrapper>
  );
};
