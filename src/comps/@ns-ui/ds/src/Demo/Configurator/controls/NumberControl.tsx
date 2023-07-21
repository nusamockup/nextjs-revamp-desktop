import React from 'react';
import { NumberInput } from '@ns-ui/core';
import { upperFirst } from '@ns-ui/hooks';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  return <NumberInput {...others} label={upperFirst(label)} value={value} onChange={onChange} />;
}

NumberControl.initialValue = 0;
