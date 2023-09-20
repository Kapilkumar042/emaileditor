import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { ITwoTextNew } from '@core/blocks';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type TwoTextNewProps = RecursivePartial<ITwoTextNew['data']> &
  RecursivePartial<ITwoTextNew['attributes']> & {
    children?: MjmlBlockProps<ITwoTextNew>['children'];
  };

export function TwoTextNew(props: TwoTextNewProps): JSX.Element {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.TWOTEXTNEW}
    >
      {props.children}
    </MjmlBlock>
  );
}
