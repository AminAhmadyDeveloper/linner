'use client';

import React from 'react';
import { LinnerTime } from './time-line-decider';

import './styles.css';

interface LinnerProps extends React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {
  children: ReturnType<typeof LinnerTime>[] | ReturnType<typeof LinnerTime>;
}

export const Linner: React.FC<LinnerProps> = ({ children, className, ...props }) => {
  return (
    <ol className={`linner ${className ? className : ''}`} {...props}>
      {children}
    </ol>
  );
};

export * from './time-line-decider';
export * from './assets';
