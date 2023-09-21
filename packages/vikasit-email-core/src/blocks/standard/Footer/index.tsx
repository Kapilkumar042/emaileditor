import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type IFooter = IBlockData<
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

export const Footer = createBlock<IFooter>({
  get name() {
    return t('Footer');
  },
  type: BasicType.FOOTER,
  create: payload => {
    const defaultData: IFooter = {
      type: BasicType.FOOTER,
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
          type: 'section',
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
                          'Vikasit.<br>',
                      },
                    },
                    attributes: {
                      align: 'center',
                      'background-color': '#414141',
                      color: '#000000',
                      'font-weight': '700',
                      'border-radius': '3px',
                      padding: '0px 25px 10px 5px',
                      'inner-padding': '10px 25px 10px 5px',
                      'line-height': '1.5',
                      target: '_blank',
                      'vertical-align': 'middle',
                      border: 'none',
                      'text-align': 'center',
                      href: '#',
                      'font-size': '18px',
                    },
                    children: [],
                  },
                  {
                    type: 'text',
                    data: {
                      value: {
                        content:
                          'G73, 201301, Noida<br>',
                      },
                    },
                    attributes: {
                      align: 'center',
                      'background-color': '#414141',
                      color: '#000000',
                      'font-weight': 'normal',
                      'border-radius': '3px',
                      padding: '0px 25px 10px 5px',
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
                    type: 'text',
                    data: {
                      value: {
                        content:
                          'his email was sent to EMAIL<br>',
                      },
                    },
                    attributes: {
                      align: 'center',
                      'background-color': '#414141',
                      color: '#000000',
                      'font-weight': 'normal',
                      'border-radius': '3px',
                      padding: '0px 25px 10px 5px',
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
                    type: 'text',
                    data: {
                      value: {
                        content:
                          "You've received it because you've subscribed to our newsletter.<br>",
                      },
                    },
                    attributes: {
                      align: 'center',
                      'background-color': '#414141',
                      color: '#000000',
                      'font-weight': 'normal',
                      'border-radius': '3px',
                      padding: '0px 25px 10px 5px',
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
                    type: 'text',
                    data: {
                      value: {
                        content: 'Unsubscribe',
                      },
                    },
                    attributes: {
                    'text-decoration': 'underline',
                      align: 'center',
                      'background-color': '#ffffff',
                      color: '#000000',
                      'font-size': '13px',
                      'font-weight': 'normal',
                      padding: '0px 25px 0px 5px',
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

    return (
      <BasicBlock
        params={params}
        tag='mj-hero'
      ></BasicBlock>
    );
  },
});
