import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IImageWithRightText } from '@core/blocks';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type ImageWithRightTextProps = RecursivePartial<IImageWithRightText['data']> &
  RecursivePartial<IImageWithRightText['attributes']> & {
    children?: MjmlBlockProps<IImageWithRightText>['children'];
  };

export function ImageWithRightText(props: ImageWithRightTextProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.IMAGE_WITH_RIGHT_TEXT}
    >
      {props.children}
    </MjmlBlock>
  );
}
