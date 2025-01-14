import {
  AdvancedBlock,
  ICondition,
  IConditionGroup,
  IConditionGroupItem,
  Operator,
  OperatorSymbol,
} from './generateAdvancedBlock';
import { AdvancedType } from '@core/constants';
import {
  AdvancedText,
  AdvancedButton,
  AdvancedImage,
  AdvancedDivider,
  AdvancedSpacer,
  AdvancedNavbar,
  AdvancedAccordion,
  AdvancedCarousel,
  AdvancedSocial,
  AdvancedWrapper,
  AdvancedSection,
  AdvancedGroup,
  AdvancedColumn,
  AdvancedHero,
  AdvancedHeaderWithLogo,
  AdvancedImage3X,
  AdvancedImage2X,

} from './blocks';
import { VERTICAL } from '../standard/VerticalImage';
import { Title } from '../standard/Title';
import { TwoTextNew } from '../standard/TwoTextNew';



export const advancedBlocks = {
  [AdvancedType.TEXT]: AdvancedText,
  [AdvancedType.BUTTON]: AdvancedButton,
  [AdvancedType.HEADER_WITH_LOGO]:AdvancedHeaderWithLogo,
  [AdvancedType.IMAGE]: AdvancedImage,
  [AdvancedType.DIVIDER]: AdvancedDivider,
  [AdvancedType.SPACER]: AdvancedSpacer,
  [AdvancedType.NAVBAR]: AdvancedNavbar,
  [AdvancedType.ACCORDION]: AdvancedAccordion,
  [AdvancedType.CAROUSEL]: AdvancedCarousel,
  [AdvancedType.SOCIAL]: AdvancedSocial,



  [AdvancedType.WRAPPER]: AdvancedWrapper,
  [AdvancedType.SECTION]: AdvancedSection,
  [AdvancedType.GROUP]: AdvancedGroup,
  [AdvancedType.COLUMN]: AdvancedColumn,
  [AdvancedType.HERO]: AdvancedHero,
  [AdvancedType.VERTICAL]: VERTICAL,
  [AdvancedType.IMAGE_3X] : AdvancedImage3X,
  [AdvancedType.IMAGE_2X] : AdvancedImage2X,
  [AdvancedType.TITLE]:Title,
  [AdvancedType.TWOTEXTNEW]:TwoTextNew,
};

export { Operator, OperatorSymbol };
export type { AdvancedBlock, ICondition, IConditionGroup, IConditionGroupItem };
