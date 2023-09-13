import { BlockManager } from 'vikasit-email-core';
import { BlockAttributeConfigurationManager } from 'vikasit-email-extensions';
import { CustomBlocksType } from './constants';
import { Panel as ProductRecommendationPanel, ProductRecommendation } from './ProductRecommendation';
import { FooterSection, FooterPanel as FooterRecmmendationPanel } from "./Footer/index"
import {ImageWithRightText, Panel as ImageWithRightTextPanel } from "./ImageWithRightText/index"
BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendation,
  [CustomBlocksType.FOOTER_SECTION]: FooterSection,
  [CustomBlocksType.IMAGE_WITH_RIGHT_TEXT]: ImageWithRightText,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
  [CustomBlocksType.FOOTER_SECTION]: FooterRecmmendationPanel,
  [CustomBlocksType.IMAGE_WITH_RIGHT_TEXT]: ImageWithRightTextPanel,
});

// BlockManager.registerBlocks({
//   [CustomBlocksType.FOOTER_SECTION]: FooterSection,
// });
// BlockAttributeConfigurationManager.add({
//   [CustomBlocksType.FOOTER_SECTION]: FooterRecmmendationPanel,
// });

// BlockManager.registerBlocks({
//   [CustomBlocksType.IMAGE_WITH_RIGHT_TEXT]: ImageWithRightText,
// });
// BlockAttributeConfigurationManager.add({
//   [CustomBlocksType.IMAGE_WITH_RIGHT_TEXT]: ImageWithRightTextPanel,
// });