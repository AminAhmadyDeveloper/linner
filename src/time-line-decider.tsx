import React from 'react';
import { PhosphorIcon, PhosphorIconProps } from './assets'

export type LinnerVariant = 'default' | 'headless';

export interface BaseProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  variant: LinnerVariant;
}

export interface DefaultProps extends BaseProps {
  variant: 'default';
  description?: string;
  title: string;
  iconVariant?: PhosphorIconProps['variant'];
  date: {
    from: string;
    to: string;
  };
}

export interface HeadlessProps extends BaseProps {
  variant: 'headless';
  children: React.ReactNode;
}

export const LinnerTime = (props: HeadlessProps | DefaultProps) => {
  if (props.variant === 'default') {
    return (
      <li className={`linner-time ${props.className ? props.className : ''}`}>
        <div className="linner-time-dot" />
        <div className="linner-default-time-dates">
          <PhosphorIcon variant={props.iconVariant ?? 'BlankIcon'} className="linner-time-icon" />
          <time>{props.date.from}</time>
          <time> - </time>
          <time>{props.date.to}</time>
        </div>
        <h3 className="linner-time-title">{props.title}</h3>
        {!!props.description && <p className="mb-4 text-base font-normal text-muted-foreground">{props.description}</p>}
        {props.children}
      </li>
    );
  } else {
    return (
      <li className="linner-headless">
        <div className="linner-time-dot" />
        {props.children}
      </li>
    );
  }
};
