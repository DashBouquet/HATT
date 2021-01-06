import React, { FC } from 'react';
import {
  Blockquote,
  Description,
  Order,
  Rule,
  RuleWrapper,
  BorderImage,
  BorderGradient,
  ImgWithBorder,
  BoxDecBreakClone,
  BoxDecBreakSlice,
  BreakExampleAfter,
  BreakExampleBefore,
  Input,
  InputCustom,
  EditableP,
  ClipPath,
  ClipPath2,
  ClipPath3,
} from './styled';
import { routesCss } from '../../constants';
import { AppHeader } from '../../components/AppHeader';
import azimuth from '../../assets/images/azimuth.png';
import bleed from '../../assets/images/bleed.png';
import jedais from '../../assets/images/jedais.jpg';
import captionside from '../../assets/images/captionside.png';
import baloon from '../../assets/images/balloon-small.jpg';
import {
  CssRuleDeprecated,
  CssRuleDescription,
  CssRuleExperimental,
  HeaderWrapper,
  PageWrapper,
} from '../../typography';

export const CssWorkshop: FC = () => {
  return (
    <PageWrapper>
      <AppHeader
        title="Unknown Css Properties"
        subTitle="workshop DB"
        routes={routesCss}
      />
      <RuleWrapper>
        <Rule>
          <Order>1.</Order>all
        </Rule>

        <Description>
          <CssRuleDescription>
            The all shorthand CSS property resets almost all of an element`s
            properties.
          </CssRuleDescription>
          <br />
          <Blockquote id="quote">
            THIS IS Styled text with all: unset.
          </Blockquote>
          <CssRuleDescription>
            Also can be inherit, initial, revert.
          </CssRuleDescription>
        </Description>
      </RuleWrapper>

      <RuleWrapper>
        <Rule>
          <Order>2.</Order>azimuth
        </Rule>
        <Description>
          <CssRuleDeprecated>Deprecated. </CssRuleDeprecated>
          <CssRuleDescription>
            In combination with elevation, the azimuth CSS property enables
            different audio sources to be positioned spatially for aural
            presentation.
          </CssRuleDescription>
          <br />
          <img width={400} height={276} src={azimuth} alt="azimuth" />
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>3.</Order>bleed
        </Rule>
        <Description>
          <CssRuleExperimental>Experimental. </CssRuleExperimental>
          <CssRuleDescription>
            The bleed property in CSS is for specifying space outside of the
            page box boundary when determining the size of a printed page.
          </CssRuleDescription>
          <br />
          <CssRuleDescription>Syntax: auto | length (cm/pt)</CssRuleDescription>
          <br />
          <img width={400} src={bleed} alt="bleed" />
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
          <CssRuleDescription>
            Syntax: slice | clone | initial | inherit | unset
          </CssRuleDescription>
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>6.</Order> break-(after/before) column-(rule/count)
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
            Some sources claim that this property is obsolete.
          </BreakExampleBefore>
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>7.</Order> caption-side
        </Rule>
        <Description>
          <CssRuleDescription>
            The caption-side property specifies the placement of a table
            caption. Usually used on the table tag.
          </CssRuleDescription>
          <br />
          <img src={captionside} width={400} alt="caption side example" />
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>8.</Order> caret-color
        </Rule>
        <Description>
          <Input onChange={() => {}} value="This field uses a default caret." />
          <InputCustom
            onChange={() => {}}
            className="custom"
            value="I have red caret color!"
          />
          <EditableP contentEditable>I have green caret color!</EditableP>
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>9.</Order> clear
        </Rule>
        <Description>
          <CssRuleDescription>
            The clear CSS property sets whether an element must be moved below
            (cleared) floating elements that precede it. The clear property
            applies to floating and non-floating elements. Relevant for
            supporting old browsers or working with old code.
          </CssRuleDescription>
        </Description>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>10.</Order> clip (clip-path)
        </Rule>
        <Description>
          <HeaderWrapper>
            <CssRuleDescription>
              This property creates a clipping region that sets what part of an
              element should be shown. Parts that are inside the region are
              shown, while those outside are hidden. Can be used with HTML and
              SVG.
            </CssRuleDescription>
            <ClipPath src={baloon} width="130" />
            <ClipPath2 src={baloon} width="130" />
            <ClipPath3 src={baloon} width="130" />
          </HeaderWrapper>
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
          <Order>13.</Order> content
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>15.</Order> counter-increment
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>16.</Order> counter-reset
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>17.</Order> cue
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>18.</Order> cue-after
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>19.</Order> cue-before
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>20.</Order> direction
        </Rule>
        <div>example1</div>
      </RuleWrapper>
      <RuleWrapper>
        <Rule>
          <Order>21.</Order> elevation
        </Rule>
        <div>example1</div>
      </RuleWrapper>
    </PageWrapper>
  );
};
