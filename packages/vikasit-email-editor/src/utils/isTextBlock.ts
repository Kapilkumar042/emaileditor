import { BasicType, AdvancedType } from 'vikasit-email-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.TEXT || blockType === AdvancedType.TEXT;
  // return blockType === BasicType.TITLE || blockType === AdvancedType.TITLE;

}