import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getImg } from '@core/utils/getImg';
import { mergeBlock } from '@core/utils/mergeBlock';
import { t } from '@core/utils';
import { BasicBlock } from '@core/components/BasicBlock';

export type IThreeVerticalImage = IBlockData<
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
  { }
>;

export const ThreeVerticalImage = createBlock<IThreeVerticalImage>({
  get name() {
    return t('Image 3X');
  },
  type: BasicType.IMAGE_3X,
  create: payload => {
    const defaultData: IThreeVerticalImage = {
      type: BasicType.IMAGE_3X,
      data: {
        value: { },
      },
      attributes: {
        'background-color': '#ffffff',
        'background-position': 'center center',
        mode: 'fluid-height',
        padding: '0px 0px 10px 0px',
        'vertical-align': 'top',
        'background-url': getImg('IMAGE_31'),
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
                padding: '0px 10px 0px 15px',
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
                    height: 'auto',
                    padding: '10px 0px 10px 0px',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
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
                padding: '0px 10px 0px 10px',
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
                    height: 'auto',
                    padding: '10px 0px 10px 0px',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
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
                padding: '0px 15px 0px 10px',
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
                        height: 'auto',
                        padding: '10px 0px 10px 0px',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU',
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
      />
    );
  },
});
