import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IHeader } from '@core/blocks';
import MjmlBlock, { MjmlBlockProps } from '@core/components/MjmlBlock';

export type HeaderWithLogoProps = RecursivePartial<IHeader['data']> &
  RecursivePartial<IHeader['attributes']> & {
    children?: MjmlBlockProps<IHeader>['children'];
  };

export function HeaderWithLogo(props: HeaderWithLogoProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children', 'value'])}
      value={props.value}
      type={BasicType.HEADER_WITH_LOGO}
    >
      {props.children}
    </MjmlBlock>
  );
}
