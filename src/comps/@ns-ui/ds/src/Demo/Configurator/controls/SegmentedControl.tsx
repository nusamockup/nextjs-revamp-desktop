import React from 'react';
import { Input, SegmentedControl as NsUISegmentedControl } from '@ns-ui/core';
import { upperFirst } from '@ns-ui/hooks';

interface SizeControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
  data: { value: string; label: string }[];
}

export function SegmentedControl({ value, label, onChange, data, ...others }: SizeControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
      <NsUISegmentedControl
        data={data.map((item) => ({ value: item.value, label: upperFirst(item.label) }))}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={150}
        transitionTimingFunction="ease"
      />
    </Input.Wrapper>
  );
}

SegmentedControl.initialValue = '';
