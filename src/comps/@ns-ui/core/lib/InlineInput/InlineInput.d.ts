import React from 'react';
import { DefaultProps, NsUINumberSize, Selectors } from '@ns-ui/styles';
import useStyles from './InlineInput.styles';
export type InlineInputStylesNames = Selectors<typeof useStyles>;
export interface InlineInputProps extends DefaultProps<InlineInputStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    __staticSelector: string;
    label: React.ReactNode;
    description: React.ReactNode;
    id: string;
    disabled: boolean;
    error: React.ReactNode;
    size: NsUINumberSize;
    labelPosition: 'left' | 'right';
}
export declare const InlineInput: React.ForwardRefExoticComponent<InlineInputProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=InlineInput.d.ts.map