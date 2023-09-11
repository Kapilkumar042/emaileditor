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
  
  export type IImageWithRightText = IBlockData<
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
      buttonText: string;
      paragraph:string;
    }
  >;
  
  const productPlaceholder = {
    image: 'https://assets.vikasit.com/8e0e07e2-3f84-4426-84c1-2add355c558b-image.png',
    title: 'G73, 201301, Noida',
    price: 'This email was sent to EMAIL',
    url: "You've received it because you've subscribed to our newsletter.",
    resion:"You've received it because you've subscribed to our newsletter.",
  };
  
  export const ImageWithRightText = createCustomBlock<IImageWithRightText>({
    name: 'Image With Right Text',
    type: CustomBlocksType.IMAGE_WITH_RIGHT_TEXT,
    // validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, BasicType.WRAPPER],
    create: payload => {
      const defaultData: IImageWithRightText = {
        type: CustomBlocksType.IMAGE_WITH_RIGHT_TEXT,
        data: {
          value: {
            title: 'Some Title Here.',
            buttonText: 'Call to action',
            paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy, Lorem Ipsum has been the industry's standard dummy."
            
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
      const { title, buttonText, quantity, paragraph } = data.data.value;
      const attributes = data.attributes;
  
      // const productList =
      //   mode === 'testing'
      //     ? new Array(quantity).fill(productPlaceholder)
      //     : (dataSource?.product_list || []).slice(0, quantity);
  
      // const perWidth = quantity <= 3 ? '' : '33.33%';
  
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
            <Image
                    align='center'
                    height='auto'
                    padding='10px'
                    width='auto'
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  />
            </Column>
          <Column
              padding='0px'
              border='none'
              vertical-align='top'
            >
              <Text
                font-size='20px'
                padding='10px 25px 10px 25px'
                line-height='1'
                align='left'
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
                padding='10px 25px 10px 25px'
                line-height='1.58'
                align='left'
                color="#000000"
                // font-weight='bold'
                // color={attributes['paragraph-color']}
                css-class={getContentEditableClassName(
                  BasicType.TEXT,
                  `${idx}.data.value.paragraph`,
                ).join(' ')}
              >
                {paragraph}
              </Text>
              <Button
                    align='left'
                    padding='0px 0px 0px 20px'
                    background-color={attributes['button-color']}
                    color={attributes['button-text-color']}
                    target='_blank'
                    vertical-align='middle'
                    border='none'
                    border-radius={attributes['button-radius']}
                    text-align='center'
                    href={'#'}
                    css-class={getContentEditableClassName(
                        BasicType.BUTTON,
                        `${idx}.data.value.button`,
                      ).join(' ')}
                  >
                    {buttonText}
                  </Button>
            </Column>
            
          </Section>
          {/* <Column
              padding='0px'
              border='none'
              vertical-align='top'
            >
             <Button
                    align='center'
                    padding='15px 0px'
                    background-color={attributes['button-color']}
                    color={attributes['button-text-color']}
                    target='_blank'
                    vertical-align='middle'
                    border='none'
                    text-align='center'
                    href={'#'}
                    css-class={getContentEditableClassName(
                        BasicType.BUTTON,
                        `${idx}.data.value.button`,
                      ).join(' ')}
                  >
                    {buttonText}
                  </Button>
            </Column> */}
  
          {/* <Section padding='0px'>
            <Group
              vertical-align='top'
              direction='ltr'
            >
              {productList.map((item, index) => (
                <Column
                  key={index}
                  width={perWidth}
                  padding='0px'
                  border='none'
                  vertical-align='top'
                >
                  <Image
                    align='center'
                    height='auto'
                    padding='10px'
                    width='150px'
                    src={item.image}
                  />
                  <Text
                    font-size='12px'
                    padding='10px 0px 10px 0px '
                    line-height='1'
                    align='center'
                    color={attributes['product-name-color']}
                    css-class={getContentEditableClassName(
                      BasicType.TEXT,
                      `${idx}.data.value.title`,
                    ).join(' ')}
                  >
                    {item.title}
                  </Text>
                  <Text
                    font-size='12px'
                    padding='10px'
                    line-height='1'
                    align='center'
                    color={attributes['product-price-color']}
                    css-class={getContentEditableClassName(
                      BasicType.TEXT,
                      `${idx}.data.value.title`,
                    ).join(' ')}
                  >
                    {item.price}
                  </Text>
                  <Text
                    font-size='12px'
                    padding='0px'
                    marginTop='10px'
                    line-height='1'
                    align='center'
                    color={attributes['product-price-color']}
                    css-class={getContentEditableClassName(
                      BasicType.TEXT,
                      `${idx}.data.value.title`,
                    ).join(' ')}
                  >
                    {item.url}
                  </Text>
                  <Button
                    align='center'
                    padding='15px 0px'
                    background-color={attributes['button-color']}
                    color={attributes['button-text-color']}
                    target='_blank'
                    vertical-align='middle'
                    border='none'
                    text-align='center'
                    href={item.url}
                  >
                    {buttonText}
                  </Button>
                </Column>
              ))}
            </Group>
          </Section> */}
        </Wrapper>
      );
    },
  });
  
  export { Panel } from './Panel';
  