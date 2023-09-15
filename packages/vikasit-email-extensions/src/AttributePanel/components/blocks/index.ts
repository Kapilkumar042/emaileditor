import { Page } from './Page';
import { Section } from './Section';
import { Column } from './Column';
import { Text } from './Text';
import { Image } from './Image';
import { Group } from './Group';
import { Button } from './Button';
import { HeaderWithLogo }  from './HeaderWithLogo';
import { Divider } from './Divider';
import { Wrapper } from './Wrapper';
import { Spacer } from './Spacer';

import { Raw } from './Raw';
import { Accordion } from './Accordion';
import { AccordionElement } from './AccordionElement';
import { AccordionTitle } from './AccordionTitle';
import { AccordionText } from './AccordionText';
import { Carousel } from './Carousel';
import { Hero } from './Hero';

import { ImageWithRightText } from './ImageWithRighttext';

import { VerticalImage } from './VerticalImage';


import { ImageWith3VerticalText } from './ImageWith3VerticalText';
import { Navbar } from './Navbar';
import { Social } from './Social';
import { Table } from './Table';
import { BasicType, AdvancedType } from 'vikasit-email-core';
import { ThreeVerticalImage } from './ThreeVerticalImage';
import { TwoVerticalImage } from './TwoVerticalImage';

export const blocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.IMAGE]: Image,
  [BasicType.GROUP]: Group,
  [BasicType.BUTTON]: Button,
  [BasicType.HEADER_WITH_LOGO]:HeaderWithLogo,
  [BasicType.DIVIDER]: Divider,
  [BasicType.WRAPPER]: Wrapper,
  [BasicType.SPACER]: Spacer,
  [BasicType.RAW]: Raw,
  [BasicType.ACCORDION]: Accordion,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement,
  [BasicType.ACCORDION_TITLE]: AccordionTitle,
  [BasicType.ACCORDION_TEXT]: AccordionText,
  [BasicType.CAROUSEL]: Carousel,
  [BasicType.HERO]: Hero,

  [BasicType.IMAGE_WITH_RIGHT_TEXT] : ImageWithRightText ,

  [BasicType.VERTICAL]: VerticalImage,

  [BasicType.IMAGE_2X] : TwoVerticalImage,
  [BasicType.IMAGE_3X] : ThreeVerticalImage,
  [BasicType.IMAGE_WITH_3_VERTICAL_TEXT] : ImageWith3VerticalText,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,
  [BasicType.TABLE]: Table,

  [AdvancedType.TEXT]: Text,
  [AdvancedType.IMAGE]: Image,
  [AdvancedType.BUTTON]: Button,
  [AdvancedType.HEADER_WITH_LOGO]:HeaderWithLogo,
  [AdvancedType.DIVIDER]: Divider,
  [AdvancedType.SPACER]: Spacer,
  [AdvancedType.ACCORDION]: Accordion,
  [AdvancedType.CAROUSEL]: Carousel,
  [AdvancedType.NAVBAR]: Navbar,
  [AdvancedType.SOCIAL]: Social,

  [AdvancedType.HERO]: Hero,

  // [AdvancedType.IMAGE_WITH_RIGHT_TEXT] : ImageWithRightText,
  [AdvancedType.IMAGE_3X]: ThreeVerticalImage,
  [AdvancedType.IMAGE_2X]: TwoVerticalImage,
  [AdvancedType.WRAPPER]: Wrapper,
  [AdvancedType.SECTION]: Section,
  [AdvancedType.GROUP]: Group,
  [AdvancedType.COLUMN]: Column,
};
