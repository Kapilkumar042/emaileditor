import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type ITwoTextNew = IBlockData<
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

export const TwoTextNew = createBlock<ITwoTextNew>({
  get name() {
    return t('Text 2X');
  },
  type: BasicType.TWOTEXTNEW,
  create: payload => {
    const defaultData: ITwoTextNew = {
      type: BasicType.TWOTEXTNEW,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: 'section',
          data: {
            value: {
              noWrap: false,
            },
          },
          attributes: {
            padding: '0px px 0px 0x',
            'background-repeat': 'repeat',
            'background-size': 'auto',
            'background-position': 'top center',
            border: 'none',
            direction: 'ltr',
            'text-align': 'center',
          },
          children: [
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                padding: '0px 0px 5px 5px',
                border: 'none',
                'vertical-align': 'top',
              },
              children: [
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
              ],
            },
            {
              type: 'column',
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
    console.log('params bt iwrt', params);

    return (
      <BasicBlock
        params={params}
        tag='mj-hero'
      ></BasicBlock>
    );
  },
});
