import { classnames } from '@/utils/classnames';
import React from 'react';
import './index.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  title?: string;
  noBorder?: boolean;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}
export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={classnames(
        'vikasit-email-editor-button',
        props.noBorder && 'vikasit-email-editor-noBorder',
      )}
      title={props.title}
      disabled={props.disabled}
      type='button'
      style={{backgroundColor:"white"}}
    >
      <>{props.children}</>
    </button>
  );
};
