import { IPage, Page } from './Page';
import { ISection, Section } from './Section';
import { Column, IColumn } from './Column';
import { IText, Text } from './Text';
import { ITitle, Title } from './Title';

import { IImage, Image } from './Image';
import { Group, IGroup } from './Group';
import { Button, IButton } from './Button';
import { HeaderWithLogo, IHeader } from './HeaderWithLogo';
import { Divider, IDivider } from './Divider';
import { IWrapper, Wrapper } from './Wrapper';
import { ISpacer, Spacer } from './Spacer';
import { Carousel, ICarousel } from './Carousel';
import { Hero, IHero } from './Hero';
import { ITwoTextNew, TwoTextNew } from './TwoTextNew';

import { Shadow, IShadow } from './Shadow';
import { ImageWithRightText, IImageWithRightText } from './ImageWithRightText';
import { Footer, IFooter } from './Footer';
import { IVerticalImage, VERTICAL } from './VerticalImage';

import { ImageWith3VerticalText, IImageWith3VerticalText } from './ImageWith3VerticalText';
import { ThreeVerticalImage, IThreeVerticalImage } from './ThreeVerticalImage';
import { TwoVerticalImage, ITwoVerticalImage } from './TwoVerticalImage';
import { Navbar, INavbar } from './Navbar';
import { ISocial, Social } from './Social';
import { Raw, IRaw } from './Raw';
import { Template, ITemplate } from './Template';

import { Accordion, IAccordion } from './Accordion';
import { AccordionElement, IAccordionElement } from './AccordionElement';
import { AccordionTitle, IAccordionTitle } from './AccordionTitle';
import { AccordionText, IAccordionText } from './AccordionText';
import { Table, ITable } from './Table';
import { BasicType } from '@core/constants';
export const standardBlocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.TITLE]: Title,
  [BasicType.TWOTEXTNEW]: TwoTextNew,

  [BasicType.IMAGE]: Image,
  [BasicType.GROUP]: Group,
  [BasicType.BUTTON]: Button,
  [BasicType.HEADER_WITH_LOGO]: HeaderWithLogo,
  [BasicType.DIVIDER]: Divider,
  [BasicType.WRAPPER]: Wrapper,
  [BasicType.SPACER]: Spacer,
  [BasicType.RAW]: Raw,
  [BasicType.CAROUSEL]: Carousel,
  [BasicType.HERO]: Hero,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,
  [BasicType.FOOTER]: Footer,
  [BasicType.IMAGE_WITH_RIGHT_TEXT]: ImageWithRightText,
  [BasicType.IMAGE_3X] : ThreeVerticalImage,
  [BasicType.IMAGE_2X] : TwoVerticalImage,
  [BasicType.VERTICAL]: VERTICAL,
  [BasicType.IMAGE_WITH_3_VERTICAL_TEXT]:ImageWith3VerticalText,
  [BasicType.SHADOW] : Shadow,
  // spacial block, render string
  [BasicType.TEMPLATE]: Template,

  // TODO:

  [BasicType.ACCORDION]: Accordion,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement,
  [BasicType.ACCORDION_TITLE]: AccordionTitle,
  [BasicType.ACCORDION_TEXT]: AccordionText,

  [BasicType.TABLE]: Table,
};

export type {
  IPage,
  ISection,
  IWrapper,
  IColumn,
  IGroup,
  IText,
  ITable,
  IImage,
  IButton,
  IHeader,
  IDivider,
  ISpacer,
  ICarousel,
  IHero,
  IImageWithRightText,
  IImageWith3VerticalText,
  IThreeVerticalImage,
  ITwoVerticalImage,
  ISocial,
  INavbar,
  IRaw,
  IAccordion,
  IAccordionElement,
  IAccordionTitle,
  IAccordionText,
  ITemplate,
  IVerticalImage,
  ITitle,
  ITwoTextNew,
  IShadow,
  IFooter,
};
