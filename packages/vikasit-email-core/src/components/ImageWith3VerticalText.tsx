import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IImageWith3VerticalText } from '@core/blocks';

import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type ImageWith3VerticalTextProps = RecursivePartial<IImageWith3VerticalText['data']> &
  RecursivePartial<IImageWith3VerticalText['attributes']> & {
    children?: MjmlBlockProps<IImageWith3VerticalText>['children'];
  };

export function IImageWith3VerticalText(props: ImageWith3VerticalTextProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.IMAGE_WITH_3_VERTICAL_TEXT}
    >
      {props.children}
    </MjmlBlock>
  );
}
