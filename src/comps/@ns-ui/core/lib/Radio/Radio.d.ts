import React from 'react';
import { DefaultProps, NsUISize, NsUIColor, Selectors } from '@ns-ui/styles';
import { ForwardRefWithStaticComponents } from '@ns-ui/utils';
import { RadioGroup } from './RadioGroup/RadioGroup';
import { InlineInputStylesNames } from '../InlineInput';
import useStyles, { RadioStylesParams } from './Radio.styles';
export type RadioStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;
export interface RadioProps extends DefaultProps<RadioStylesNames, RadioStylesParams>, Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
    variant?: string;
    /** Radio label */
    label?: React.ReactNode;
    /** Active radio color from theme.colors */
    color?: NsUIColor;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: NsUISize;
    /** Replace default icon */
    icon?: React.FC<React.ComponentPropsWithoutRef<'svg'>>;
    /** Animation duration in ms */
    transitionDuration?: number;
    /** Props spread to root element */
    wrapperProps?: Record<string, any>;
    /** Position of label */
    labelPosition?: 'left' | 'right';
    /** description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
}
type RadioComponent = ForwardRefWithStaticComponents<RadioProps, {
    Group: typeof RadioGroup;
}>;
export declare const Radio: RadioComponent;
export {};
//# sourceMappingURL=Radio.d.ts.map