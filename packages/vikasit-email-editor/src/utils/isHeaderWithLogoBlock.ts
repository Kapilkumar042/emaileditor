import { BasicType, AdvancedType } from 'vikasit-email-core';

export function isHeaderWithLogoBlock(blockType: any) {
  return blockType === BasicType.HEADER_WITH_LOGO || blockType === AdvancedType.HEADER_WITH_LOGO;
}