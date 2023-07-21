import React from 'react';
import { DefaultProps, NsUINumberSize, NsUIGradient, NsUIColor, Variants } from '@ns-ui/styles';
import { ThemeIconStylesParams } from './ThemeIcon.styles';
export interface ThemeIconProps extends DefaultProps<never, ThemeIconStylesParams>, React.ComponentPropsWithoutRef<'div'> {
    /** Icon */
    children: React.ReactNode;
    /** Width and height of theme icon */
    size?: NsUINumberSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: NsUINumberSize;
    /** Icon color from theme */
    color?: NsUIColor;
    /** Controls appearance */
    variant?: Variants<'filled' | 'light' | 'gradient' | 'outline' | 'default'>;
    /** Controls gradient settings in gradient variant only */
    gradient?: NsUIGradient;
}
export declare const ThemeIcon: React.ForwardRefExoticComponent<ThemeIconProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ThemeIcon.d.ts.map