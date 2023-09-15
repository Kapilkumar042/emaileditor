import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IThreeVerticalImage } from '@core/blocks';

import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type ThreeVerticalImageProps = RecursivePartial<IThreeVerticalImage['data']> &
  RecursivePartial<IThreeVerticalImage['attributes']> & {
    children?: MjmlBlockProps<IThreeVerticalImage>['children'];
  };

export function ThreeVerticalImage(props: ThreeVerticalImageProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.IMAGE_3X}
    >
      {props.children}
    </MjmlBlock>
  );
}
