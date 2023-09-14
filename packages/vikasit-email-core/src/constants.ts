export type BlockType = BasicType;

// 基础组件

export enum BasicType {
  PAGE = 'page',
  SECTION = 'section',
  COLUMN = 'column',
  GROUP = 'group',
  TEXT = 'text',
  IMAGE = 'image',
  DIVIDER = 'divider',
  SPACER = 'spacer',
  BUTTON = 'button',
  WRAPPER = 'wrapper',
  RAW = 'raw',
  ACCORDION = 'accordion',
  ACCORDION_ELEMENT = 'accordion-element',
  ACCORDION_TITLE = 'accordion-title',
  ACCORDION_TEXT = 'accordion-text',
  HERO = 'hero',

  HEADER_WITH_LOGO='header-with-logo',
  IMAGE_WITH_RIGHT_TEXT='Image-With-Right-Text',


  IMAGE_WITH_3_VERTICAL_TEXT='Image-With-3-Vertical-Text',

  CAROUSEL = 'carousel',
  NAVBAR = 'navbar',
  SOCIAL = 'social',
  PARA = 'para',
  // TODO
  TABLE = 'table',

  TEMPLATE = 'template',
  VERTICAL = "VERTICAL"
}

// 高级组件

export enum AdvancedType {
  TEXT = 'advanced_text',
  IMAGE = 'advanced_image',
  DIVIDER = 'advanced_divider',
  SPACER = 'advanced_spacer',
  BUTTON = 'advanced_button',
  NAVBAR = 'advanced_navbar',
  SOCIAL = 'advanced_social',
  ACCORDION = 'advanced_accordion',
  CAROUSEL = 'advanced_carousel',

  WRAPPER = 'advanced_wrapper',
  SECTION = 'advanced_section',
  COLUMN = 'advanced_column',
  GROUP = 'advanced_group',
  HERO = 'advanced_hero',

  HEADER_WITH_LOGO='advanced_header-with-logo',
  IMAGE_WITH_RIGHT_TEXT='Image-With-Right-Text',
  PARA = 'advanced_para',
  VERTICAL = "VERTICAL",
  IMAGE_WITH_3_VERTICAL_TEXT = "Image-With-3-Vertical-Text"
}

export const MERGE_TAG_CLASS_NAME = 'vikasit-email-merge-tag-container';
export const EMAIL_BLOCK_CLASS_NAME = 'email-block';
