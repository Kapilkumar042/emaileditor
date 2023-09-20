import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';
import { BasicBlock } from '@core/components/BasicBlock';
import { t } from '@core/utils';

export type IHeader = IBlockData<
  {
    align?: string;
    color?: string;
    'background-color'?: string;
    'container-background-color'?: string;
    border?: string;
    'border-radius'?: string;
    href?: string;
    rel?: string;
    target?: string;
    title?: string;
    padding?: string;
    'inner-padding'?: string;
    'text-align'?: string;
    'vertical-align'?: 'middle' | 'top' | 'bottom';
    width?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    'line-height'?: string;
    'letter-spacing'?: string;
    height?: string;
    'text-decoration'?: string;
    'text-transform'?: string;
  },
  { content: React.ReactNode }
>;

export const HeaderWithLogo = createBlock<IHeader>({
  get name() {
    return t('Header');
  },
  type: BasicType.HEADER_WITH_LOGO,
  create: payload => {
    const defaultData: IHeader = {
      type: BasicType.HEADER_WITH_LOGO,
      data: {
        value: {
          content: (
            <img
              src='https://fastly.picsum.photos/id/958/536/354.jpg?hmac=vf3vAyAxK_2HGg_mRorQgRDMFHlHQ-9Bx9F90geeqhk'
              height='50px'
              width='100px'
            />
          ),
        },
      },
      attributes: {
        align: 'center',
        'background-color': '#414141',
        color: '#ffffff',
        'font-weight': 'normal',
        'border-radius': '3px',
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
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const { data } = params;
    return (
      <BasicBlock
        params={params}
        tag='mj-button'
      >
        {data.data.value.content}
      </BasicBlock>
    );
  },
});
