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
import { Title } from './Title';


import { Raw } from './Raw';
import { Accordion } from './Accordion';
import { AccordionElement } from './AccordionElement';
import { AccordionTitle } from './AccordionTitle';
import { AccordionText } from './AccordionText';
import { Carousel } from './Carousel';
import { Hero } from './Hero';

import { ImageWithRightText } from './ImageWithRighttext';

import { VerticalImage } from './VerticalImage';


import { Navbar } from './Navbar';
import { Social } from './Social';
import { Table } from './Table';
import { BasicType, AdvancedType } from 'vikasit-email-core';
import { TwoTextNew } from './TwoTextNew';

export const blocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.TITLE]: Title,
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
  [BasicType.TWOTEXTNEW]: TwoTextNew,

  [BasicType.IMAGE_WITH_RIGHT_TEXT] : ImageWithRightText ,
  [BasicType.VERTICAL]: VerticalImage,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,
  [BasicType.TABLE]: Table,

  [AdvancedType.TEXT]: Text,
  // [AdvancedType.TITLE]: Title,

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
// [AdvancedType.TWOTEXTNEW]: TwoTextNew,

// [AdvancedType.TWOTEXT]: TwoText,




  // [AdvancedType.TITLE]: Title,
  // [AdvancedType.IMAGE_WITH_RIGHT_TEXT] : ImageWithRightText,

  [AdvancedType.WRAPPER]: Wrapper,
  [AdvancedType.SECTION]: Section,
  [AdvancedType.GROUP]: Group,
  [AdvancedType.COLUMN]: Column,
};
