import {
  IButton,
  ICarousel,
  IDivider,
  IImage,
  INavbar,
  ISpacer,
  IText,
  IAccordion,
  ISocial,
  IWrapper,
  ISection,
  IGroup,
  IColumn,
  IHero,
  IHeader,
  ITitle,
  ITwoTextNew,

  IImageWithRightText,

  IVerticalImage,
  IThreeVerticalImage,
  ITwoVerticalImage,
  IImageWith3VerticalText
} from '../../standard';
import { AdvancedType, BasicType } from '@core/constants';
import { generateAdvancedContentBlock } from '../generateAdvancedContentBlock';
import { generateAdvancedLayoutBlock } from '../generateAdvancedLayoutBlock';

export const AdvancedText = generateAdvancedContentBlock<IText>({
  type: AdvancedType.TEXT,
  baseType: BasicType.TEXT,
});
export const Title = generateAdvancedContentBlock<ITitle>({
  type: AdvancedType.TITLE,
  baseType: BasicType.TITLE,
});

export const AdvancedButton = generateAdvancedContentBlock<IButton>({
  type: AdvancedType.BUTTON,
  baseType: BasicType.BUTTON,
});

export const AdvancedHeaderWithLogo = generateAdvancedContentBlock<IHeader>({
  type: AdvancedType.HEADER_WITH_LOGO,
  baseType: BasicType.HEADER_WITH_LOGO,
});

export const AdvancedImage = generateAdvancedContentBlock<IImage>({
  type: AdvancedType.IMAGE,
  baseType: BasicType.IMAGE,
});

export const AdvancedDivider = generateAdvancedContentBlock<IDivider>({
  type: AdvancedType.DIVIDER,
  baseType: BasicType.DIVIDER,
});

export const AdvancedSpacer = generateAdvancedContentBlock<ISpacer>({
  type: AdvancedType.SPACER,
  baseType: BasicType.SPACER,
});

export const AdvancedNavbar = generateAdvancedContentBlock<INavbar>({
  type: AdvancedType.NAVBAR,
  baseType: BasicType.NAVBAR,
});

export const AdvancedAccordion = generateAdvancedContentBlock<IAccordion>({
  type: AdvancedType.ACCORDION,
  baseType: BasicType.ACCORDION,
});

export const AdvancedCarousel = generateAdvancedContentBlock<ICarousel>({
  type: AdvancedType.CAROUSEL,
  baseType: BasicType.CAROUSEL,
});

export const AdvancedSocial = generateAdvancedContentBlock<ISocial>({
  type: AdvancedType.SOCIAL,
  baseType: BasicType.SOCIAL,
});

//

export const AdvancedWrapper = generateAdvancedLayoutBlock<IWrapper>({
  type: AdvancedType.WRAPPER,
  baseType: BasicType.WRAPPER,
  validParentType: [BasicType.PAGE],
});

export const AdvancedSection = generateAdvancedLayoutBlock<ISection>({
  type: AdvancedType.SECTION,
  baseType: BasicType.SECTION,
  validParentType: [BasicType.PAGE, BasicType.WRAPPER, AdvancedType.WRAPPER],
});

export const AdvancedGroup = generateAdvancedLayoutBlock<IGroup>({
  type: AdvancedType.GROUP,
  baseType: BasicType.GROUP,
  validParentType: [BasicType.SECTION, AdvancedType.SECTION],
});

export const AdvancedColumn = generateAdvancedLayoutBlock<IColumn>({
  type: AdvancedType.COLUMN,
  baseType: BasicType.COLUMN,
  validParentType: [
    BasicType.SECTION,
    AdvancedType.SECTION,
    BasicType.GROUP,
    AdvancedType.GROUP,
  ],
});

export const AdvancedHero = generateAdvancedLayoutBlock<IHero>({
  type: AdvancedType.HERO,
  baseType: BasicType.HERO,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
  ],

});
export const Vertical_TextImage = generateAdvancedLayoutBlock<IVerticalImage>({
  type: AdvancedType.VERTICAL,
  baseType: BasicType.VERTICAL,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
    BasicType.COLUMN
  ],
});

export const AdvancedImageWithRightText = generateAdvancedLayoutBlock<IImageWithRightText>({
  type: AdvancedType.IMAGE_WITH_RIGHT_TEXT,
  baseType: BasicType.IMAGE_WITH_RIGHT_TEXT,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
  ],
});

export const AdvancedImage3X = generateAdvancedLayoutBlock<IThreeVerticalImage>({
  type: AdvancedType.IMAGE_3X,
  baseType: BasicType.IMAGE_3X,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
  ],
});
export const TwoTextNew = generateAdvancedLayoutBlock<ITwoTextNew>({
  type: AdvancedType.TWOTEXTNEW,
  baseType: BasicType.TWOTEXTNEW,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
  ],
});

export const AdvancedImage2X = generateAdvancedLayoutBlock<ITwoVerticalImage>({
  type: AdvancedType.IMAGE_2X,
  baseType: BasicType.IMAGE_2X,
  validParentType: [
    BasicType.WRAPPER,
    AdvancedType.WRAPPER,
    BasicType.PAGE,
  ],
});

