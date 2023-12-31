import React from 'react';
import { DefaultProps, NsUINumberSize, NsUIColor, Selectors, NsUIGradient, Variants } from '@ns-ui/styles';
import useStyles, { ActionIconStylesParams } from './ActionIcon.styles';
import { LoaderProps } from '../Loader';
export type ActionIconStylesNames = Selectors<typeof useStyles>;
export interface ActionIconProps extends DefaultProps<ActionIconStylesNames, ActionIconStylesParams> {
    __staticSelector?: string;
    /** Icon */
    children?: React.ReactNode;
    /** Controls appearance, subtle by default */
    variant?: Variants<'subtle' | 'filled' | 'outline' | 'light' | 'default' | 'transparent' | 'gradient'>;
    /** Key of theme.colors */
    color?: NsUIColor;
    /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
    gradient?: NsUIGradient;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: NsUINumberSize;
    /** Predefined button size or any valid CSS value to set width and height */
    size?: NsUINumberSize;
    /** Props added to Loader component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Indicates loading state */
    loading?: boolean;
    /** Indicates disabled state */
    disabled?: boolean;
}
export declare const _ActionIcon: React.ForwardRefExoticComponent<ActionIconProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ActionIcon: (<C = "button">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, ActionIconProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ActionIconProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof ActionIconProps> & {
    ref?: any; /** Predefined button size or any valid CSS value to set width and height */
}) | (ActionIconProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
//# sourceMappingURL=ActionIcon.d.ts.map