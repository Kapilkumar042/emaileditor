import React from 'react';
import { IBlock, IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';
import { BasicBlock } from '@core/components/BasicBlock';
import { t } from '@core/utils';

export type IShadow = IBlockData<{
  'container-background-color'?: string;
  height?: string;
  padding?: string;
  'box-shadow'?:string;
  'font-size'?: string;
},{
    content:string;
}>;

export const Shadow: IBlock<IShadow> = createBlock({
  get name() {
    return t('Shadow');
  },
  type: BasicType.SHADOW,
  create: (payload) => {
    const defaultData: IShadow = {
      type: BasicType.SHADOW,
      data: {
        value: {content:""},
      },
      attributes: {
        // height: '10px',
        'box-shadow': '8px 8px 8px  rgba(0, 0, 0, 0.8)',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const {data} = params
    return <BasicBlock params={params} tag="mj-text" >
        <div style={{border:"1px",padding:"2px",boxShadow:"5px 10px 10px #000000 "}}>{data.data.value.content}</div>
    </BasicBlock>;
  },
});
