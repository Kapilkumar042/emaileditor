import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { ITwoVerticalImage } from '@core/blocks';

import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type TwoVerticalImageProps = RecursivePartial<ITwoVerticalImage['data']> &
  RecursivePartial<ITwoVerticalImage['attributes']> & {
    children?: MjmlBlockProps<ITwoVerticalImage>['children'];
  };

export function TwoVerticalImage(props: TwoVerticalImageProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.IMAGE_2X}
    >
      {props.children}
    </MjmlBlock>
  );
}
