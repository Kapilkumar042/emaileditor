import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IVerticalImage } from '@core/blocks/standard/VerticalImage';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type HeroProps = RecursivePartial<IVerticalImage['data']> &
  RecursivePartial<IVerticalImage['attributes']> & {
    children?: MjmlBlockProps<IVerticalImage>['children'];
  };

export function Hero(props: HeroProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.VERTICAL}
    >
      {props.children}
    </MjmlBlock>
  );
}
