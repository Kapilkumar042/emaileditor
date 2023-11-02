import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';
import { BasicBlock } from '@core/components/BasicBlock';
import { mergeBlock, t } from '@core/utils';
import { getImg } from '@core/utils/getImg';

export type ITitle = IBlockData<
  {
    color?: string;
    mode?: string;
    'vertical-align'?: string;
    'background-url'?: string;
    'background-color'?: string;
    'background-position'?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    'line-height'?: string;
    'letter-spacing'?: string;
    height?: string;
    'text-decoration'?: string;
    'text-transform'?: string;
    align?: string;
    'container-background-color'?: string;
    width?: string;
    padding?: string;
  },
  {
    content: string;
  }
>;

export const Title = createBlock<ITitle>({
  get name() {
    return t('Title');
  },
  type: BasicType.TITLE,
  create: payload => {
    const defaultData: ITitle = {
      type: BasicType.TITLE,
      data: {
        value: {
          content: '',
        },
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
            'font-size': '25px',
            'line-height': '45px',
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
