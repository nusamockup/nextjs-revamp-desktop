import React from 'react';
import { DefaultProps, NsUINumberSize } from '@ns-ui/styles';
import { StackStylesParams } from './Stack.styles';
export interface StackProps extends DefaultProps<never, StackStylesParams>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Key of theme.spacing or any valid CSS value to set gap */
    spacing?: NsUINumberSize;
    /** align-items CSS property */
    align?: React.CSSProperties['alignItems'];
    /** justify-content CSS property */
    justify?: React.CSSProperties['justifyContent'];
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Stack.d.ts.map