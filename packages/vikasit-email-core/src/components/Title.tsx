import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { ITitle } from '@core/blocks/standard/Title';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type TitleProps = RecursivePartial<ITitle['data']> &
  RecursivePartial<ITitle['attributes']> & {
    children?: MjmlBlockProps<ITitle>['children'];
  };

export function Title(props: TitleProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.TITLE}
    >
      {props.children}
    </MjmlBlock>
  );
}
