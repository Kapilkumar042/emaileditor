import { BlockManager } from 'vikasit-email-core';
import { BlockAttributeConfigurationManager } from 'vikasit-email-extensions';
import { CustomBlocksType } from './constants';
import { Panel as ProductRecommendationPanel, ProductRecommendation } from './ProductRecommendation';
import { FooterSection, FooterPanel as FooterRecmmendationPanel } from "./Footer/index"
BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendation,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
});

BlockManager.registerBlocks({
  [CustomBlocksType.FOOTER_SECTION]: FooterSection,
});
BlockAttributeConfigurationManager.add({
  [CustomBlocksType.FOOTER_SECTION]: FooterRecmmendationPanel,
});