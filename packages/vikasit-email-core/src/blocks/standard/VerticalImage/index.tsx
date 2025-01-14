//image-lga ni haai
import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type IVerticalImage = IBlockData<
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

export const VERTICAL = createBlock<IVerticalImage>({
  get name() {
    return t('Image Text V');
  },
  type: BasicType.VERTICAL,
  create: payload => {
    const defaultData: IVerticalImage = {
      type: BasicType.VERTICAL,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '20px 0px 20px 0px',
        'vertical-align': 'top',
        'background-url': getImg('IMAGE_31'),
      },
      children: [
        // {
        //   type: 'text',
        //   data: {
        //     value: {
        //       content: 'We Serve Healthy &amp; Delicious Foods',
        //     },
        //   },
        //   attributes: {
        //     padding: '10px 25px 10px 25px',
        //     align: 'center',
        //     color: '000000',
        //     'font-size': '45px',
        //     'line-height': '45px',
        //   },
        //   children: [],
        // },
        {
          type: 'image',
          data: {
            value: 'src',
          },
          attributes: {
            align: 'center',
            'background-color': '#414141',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
            'line-height': '1.5',
            src: 'https://img.freepik.com/free-photo/peaceful-view-sunset-light_23-2148851752.jpg',
          },
          children: [],
        },
        {
          type: 'text',
          data: {
            value: {
              content: 'We Serve Healthy &amp; Delicious Foods',
            },
          },
          attributes: {
            padding: '10px 25px 10px 25px',
            align: 'center',
            color: '000000',
            'font-size': '20px',
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
            align: 'center',
            'background-color': '#414141',
            color: '000000',
            'font-weight': 'normal',
            'border-radius': '3px',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
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
              content: 'Call to action',
            },
          },
          attributes: {
            align: 'center',
            'background-color': '#f3a333',
            color: '#ffffff',
            'font-size': '13px',
            'font-weight': 'normal',
            'border-radius': '30px',
            padding: '10px 25px 10px 25px',
            'inner-padding': '10px 25px 10px 25px',
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
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, BasicType.WRAPPER],
  render(params) {
    return (
      <BasicBlock
        params={params}
        tag='mj-hero'
      />
    );
  },
});
