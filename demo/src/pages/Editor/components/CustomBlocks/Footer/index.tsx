import {
  IBlockData,
  BasicType,
  components,
  createCustomBlock,
  getPreviewClassName,
  AdvancedType,
  mergeBlock,
} from 'vikasit-email-core';

import { CustomBlocksType } from '../constants';
import React from 'react';
import { getContentEditableClassName } from 'vikasit-email-editor';

const { Column, Section, Wrapper, Text, Button, Image, Group } = components;

export type IFooterSection = IBlockData<
  {
    'background-color': string;
    'button-color': string;
    'button-text-color': string;
    'button-radius':string;
    'product-name-color': string;
    'product-price-color': string;
    'title-color': string;
  },
  {
    title: string;
    location:string;
    message:string;
    resion:string;
    buttonText: string;
  }
>;
export const FooterSection = createCustomBlock<IFooterSection>({
  name: 'Footer section',
  type: CustomBlocksType.FOOTER_SECTION,
  // validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, BasicType.WRAPPER],
  create: payload => {
    const defaultData: IFooterSection = {
      type: CustomBlocksType.FOOTER_SECTION,
      data: {
        value: {
          title: 'Vikasit.',
          location:'G73, 201301, Noida',
          buttonText: 'Unsubscribe',
          message:"his email was sent to EMAIL",
          resion:"You've received it because you've subscribed to our newsletter.",
        },
      },
      attributes: {
        'background-color': '#ffffff',
        'button-text-color': '#ffffff',
        'button-color': '#414141',
        'product-name-color': '#414141',
        'product-price-color': '#414141',
        'title-color': '#222222',
        'button-radius':'20px',
      },
      children: [
        {
          type: BasicType.TEXT,
          children: [],
          data: {
            value: {
              content: 'custom block title',
            },
          },
          attributes: {},
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render: ({ data, idx, mode, context, dataSource }) => {
    const { title, buttonText, quantity, location, message, resion } = data.data.value;
    const attributes = data.attributes;

    return (
      <Wrapper
        // add class name when testing preview
        css-class={mode === 'testing' ? getPreviewClassName(idx, data.type) : ''}
        padding='20px 0px 20px 0px'
        border='none'
        direction='ltr'
        text-align='center'
        background-color={attributes['background-color']}
      >
        <Section padding='0px'>
        <Column
            padding='0px'
            border='none'
            vertical-align='top'
          >
            <Text
              font-size='20px'
              padding='10px 0px 0px 0px '
              line-height='1'
              align='center'
              font-weight='bold'
              color={attributes['title-color']}
              css-class={getContentEditableClassName(
                BasicType.TEXT,
                `${idx}.data.value.title`,
              ).join(' ')}
            >
              {title}
            </Text>
            <Text
              font-size='14px'
              padding='5px 0px 0px 0px'
              line-height='1.58'
              align='center'
              // font-weight='bold'
              color={attributes['location-color']}
              css-class={getContentEditableClassName(
                BasicType.TEXT,
                `${idx}.data.value.location`,
              ).join(' ')}
            >
              {location}
            </Text>
            <Text
              font-size='14px'
              padding='5px 0px 0px 0px'
              line-height='1.58'
              align='center'
              // font-weight='bold'
              color={attributes['message-color']}
              css-class={getContentEditableClassName(
                BasicType.TEXT,
                `${idx}.data.value.message`,
              ).join(' ')}
            >
              {message}
            </Text>
            <Text
              font-size='14px'
              padding='5px 0px 0px 0px'
              line-height='1.58'
              align='center'
              // font-weight='bold'
              color={attributes['resion-color']}
              css-class={getContentEditableClassName(
                BasicType.TEXT,
                `${idx}.data.value.resion`,
              ).join(' ')}
            >
              {resion}
            </Text>
            <Text
              font-size='14px'
              text-decoration= 'underline'
              padding='5px 0px 0px 0px'
              line-height='1.58'
              align='center'
              font-weight='bold'
              color={attributes['buttonText-color']}
              css-class={getContentEditableClassName(
                BasicType.TEXT,
                `${idx}.data.value.buttonText`,
              ).join(' ')}
            >
              {buttonText}
            </Text>
          </Column>
          
        </Section>
      </Wrapper>
    );
  },
});

export { FooterPanel } from './FooterPanel';
