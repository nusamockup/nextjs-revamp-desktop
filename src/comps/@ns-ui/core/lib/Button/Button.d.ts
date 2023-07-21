import React from 'react';
import { DefaultProps, NsUISize, NsUINumberSize, NsUIGradient, NsUIColor, Selectors, Variants } from '@ns-ui/styles';
import { LoaderProps } from '../Loader';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import useStyles, { ButtonStylesParams } from './Button.styles';
export type ButtonStylesNames = Selectors<typeof useStyles>;
export interface ButtonProps extends DefaultProps<ButtonStylesNames, ButtonStylesParams> {
    /** Predefined button size */
    size?: NsUISize;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    /** Button color from theme */
    color?: NsUIColor;
    /** Adds icon before button label  */
    leftIcon?: React.ReactNode;
    /** Adds icon after button label  */
    rightIcon?: React.ReactNode;
    /** Sets button width to 100% of parent element */
    fullWidth?: boolean;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: NsUINumberSize;
    /** Controls button appearance */
    variant?: Variants<'filled' | 'outline' | 'light' | 'white' | 'default' | 'subtle' | 'gradient'>;
    /** Controls gradient settings in gradient variant only */
    gradient?: NsUIGradient;
    /** Set text-transform to uppercase */
    uppercase?: boolean;
    /** Reduces vertical and horizontal spacing */
    compact?: boolean;
    /** Indicate loading state */
    loading?: boolean;
    /** Props spread to Loader component */
    loaderProps?: LoaderProps;
    /** Loader position relative to button label */
    loaderPosition?: 'left' | 'right' | 'center';
    /** Button label */
    children?: React.ReactNode;
    /** Disabled state */
    disabled?: boolean;
}
export declare const _Button: any;
export declare const Button: (<C = "button">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, ButtonProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ButtonProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof ButtonProps> & {
    ref?: any;
}) | (ButtonProps & {
    component: React.ElementType<any>;
})>, never> & {
    Group: typeof ButtonGroup;
};
//# sourceMappingURL=Button.d.ts.map