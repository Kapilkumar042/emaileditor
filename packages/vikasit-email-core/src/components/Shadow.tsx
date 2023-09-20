import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IShadow } from '@core/blocks';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type ShadowProps = RecursivePartial<IShadow['data']> &
  RecursivePartial<IShadow['attributes']> & {
    children?: MjmlBlockProps<IShadow>['children'];
  };

export function Spacer(props: ShadowProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.SPACER}
    >
      {props.children}
    </MjmlBlock>
  );
}
