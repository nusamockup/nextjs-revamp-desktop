import React from 'react';
import { DefaultProps, NsUINumberSize, NsUIColor, Variants } from '@ns-ui/styles';
export type DividerStylesNames = 'label';
export interface DividerProps extends DefaultProps<DividerStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    /** Key of theme.colors, defaults to "gray" in light color scheme and to "dark" in dark color scheme */
    color?: NsUIColor;
    /** Divider orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Sets height when orientation="horizontal" and width when orientation="vertical" */
    size?: NsUINumberSize;
    /** Text inside the divider, only applicable when orientation="horizontal" */
    label?: React.ReactNode;
    /** Label position, only applicable when orientation="horizontal" */
    labelPosition?: 'left' | 'center' | 'right';
    /** Props added to the label element */
    labelProps?: Record<string, any>;
    /** Controls appearance */
    variant?: Variants<'solid' | 'dashed' | 'dotted'>;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Divider.d.ts.map