import React from 'react';
import { DefaultProps, NsUINumberSize, NsUIColor, Selectors, NsUIGradient, Variants } from '@ns-ui/styles';
import { AvatarGroup } from './AvatarGroup/AvatarGroup';
import useStyles, { AvatarStylesParams } from './Avatar.styles';
export type AvatarStylesNames = Selectors<typeof useStyles>;
export interface AvatarProps extends DefaultProps<AvatarStylesNames, AvatarStylesParams> {
    /** Image url */
    src?: string | null;
    /** Image alt text or title for placeholder variant */
    alt?: string;
    /** Avatar width and height */
    size?: NsUINumberSize;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: NsUINumberSize;
    /** Key of theme.colors */
    color?: NsUIColor;
    /** Controls appearance */
    variant?: Variants<'filled' | 'light' | 'gradient' | 'outline'>;
    /** Gradient input, only used when variant="gradient", theme.defaultGradient by default */
    gradient?: NsUIGradient;
    /** <img /> element attributes */
    imageProps?: Record<string, any>;
    /** Custom placeholder */
    children?: React.ReactNode;
}
export declare const _Avatar: any;
export declare const Avatar: (<C = "div">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, AvatarProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AvatarProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof AvatarProps> & {
    ref?: any;
}) | (AvatarProps & {
    component: React.ElementType<any>;
})>, never> & {
    Group: typeof AvatarGroup;
};
//# sourceMappingURL=Avatar.d.ts.map