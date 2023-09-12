import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type IImageWithRightText = IBlockData<
  {
    'background-color'?: string;
    'background-height'?: string;
    'background-position'?: string;
    'background-url'?: string;
    'background-width'?: string;
    'vertical-align'?: string;
    'border-radius'?: string;
    width?: string;
    height?: string;
    mode: 'fluid-height' | 'fixed-height';
    padding?: string;
  },
  {}
>;

export const ImageWithRightText = createBlock<IImageWithRightText>({
  get name() {
    return t('ImageWithRightText');
  },
  type: BasicType.IMAGE_WITH_RIGHT_TEXT,
  create: (payload) => {
    const defaultData: IImageWithRightText = {
      type: BasicType.IMAGE_WITH_RIGHT_TEXT,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '10px 0px 10px 0px',
      },
      children: [
        {
          type:'section',
          data: {
            value: {
              noWrap: false,
            },
          },
          attributes: {
            padding: '0px 0px 0px 0px',
            'background-repeat': 'repeat',
            'background-size': 'auto',
            'background-position': 'top center',
            border: 'none',
            direction: 'ltr',
            'text-align': 'center',
          },
          children: [
            {
              type:'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 0px 0px 0px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
                {
                      type: 'image',
                      data: {
                        value: {},
                      },
                      attributes: {
                        align: 'center',
                        height: '200px',
                        padding: '10px 25px 10px 25px',
                        src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                      },
                      children: [],
                    },
              ],
            },
            {
              type:'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 0px 0px 0px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
                {
          type: 'text',
          data: {
            value: {
              content: 'We Serve Healthy &amp; Delicious Foods',
            },
          },
          attributes: {
            padding: '0px 0px 0px 0px',
            align: 'left',
            color: '#000000',
            'font-size': '16px',
            'line-height': '45px',
          },
          children: [],
        },
                 {
          type: 'text',
          data: {
            value: {
              content:
                'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br>',
            },
          },
          attributes: {
            align: 'left',
            'background-color': '#414141',
            color: '#000000',
            'font-weight': 'normal',
            'border-radius': '3px',
            padding: '10px 25px 10px 5px',
            'inner-padding': '10px 25px 10px 5px',
            'line-height': '1.5',
            target: '_blank',
            'vertical-align': 'middle',
            border: 'none',
            'text-align': 'center',
            href: '#',
            'font-size': '14px',
          },
          children: [],
        },
        {
            type: 'button',
            data: {
              value: {
                content: 'Get Your Order Here!',
              },
            },
            attributes: {
              align: 'left',
              'background-color': '#f3a333',
              color: '#ffffff',
              'font-size': '13px',
              'font-weight': 'normal',
              'border-radius': '30px',
              padding: '10px 25px 10px 5px',
              'inner-padding': '10px 25px 10px 5px',
              'line-height': '120%',
              target: '_blank',
              'vertical-align': 'middle',
              border: 'none',
              'text-align': 'center',
              href: '#',
            },
            children: [],
          },
              ],
            },
          ],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(params) {
    console.log("params bt iwrt", params);
    
    return <BasicBlock params={params} tag="mj-hero" >
      
    </BasicBlock>;
  },
});
