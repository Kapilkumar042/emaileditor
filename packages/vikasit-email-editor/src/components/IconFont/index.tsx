import { classnames } from '@/utils/classnames';
import React from 'react';
import dow from './download.jpeg';

export function IconFont(props: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClickCapture?: React.MouseEventHandler<HTMLDivElement>;

  style?: React.CSSProperties;
  iconUrl?: string;
  size?: number;
  title?: string;
  iconName?: string;
}) {
  return (
    <div
      onClick={props.onClick}
      onClickCapture={props.onClickCapture}
      title={props.title}
      style={{
        cursor: 'pointer',
        pointerEvents: 'auto',
        color: 'inherit',
        ...(props.style as any),
        fontSize: props.size || props.style?.fontSize,
      }}
      className={classnames('iconfont', props.iconName)}
    >
      <img
        src={props.iconUrl}
        alt=''
      />
    </div>
  );
}
