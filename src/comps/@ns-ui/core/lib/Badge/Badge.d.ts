import React from 'react';
import { DefaultProps, NsUISize, NsUINumberSize, NsUIGradient, NsUIColor, Selectors, Variants } from '@ns-ui/styles';
import useStyles, { BadgeStylesParams } from './Badge.styles';
export type BadgeStylesNames = Selectors<typeof useStyles>;
export interface BadgeProps extends DefaultProps<BadgeStylesNames, BadgeStylesParams> {
    /** Key of theme.colors */
    color?: NsUIColor;
    /** Controls appearance */
    variant?: Variants<'light' | 'filled' | 'outline' | 'dot' | 'gradient'>;
    /** Controls gradient, applied to gradient variant only */
    gradient?: NsUIGradient;
    /** Badge height and font size */
    size?: NsUISize;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: NsUINumberSize;
    /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
    fullWidth?: boolean;
    /** Section rendered on the left side of label */
    leftSection?: React.ReactNode;
    /** Section rendered on the right side of label */
    rightSection?: React.ReactNode;
    /** Badge label */
    children?: React.ReactNode;
}
export declare const _Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export declare const Badge: (<C = "div">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, BadgeProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BadgeProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof BadgeProps> & {
    ref?: any;
}) | (BadgeProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
//# sourceMappingURL=Badge.d.ts.map