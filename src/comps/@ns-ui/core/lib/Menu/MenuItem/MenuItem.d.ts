import React from 'react';
import { DefaultProps, NsUIColor, Selectors } from '@ns-ui/styles';
import useStyles from './MenuItem.styles';
export type MenuItemStylesNames = Selectors<typeof useStyles>;
export interface MenuItemProps extends DefaultProps {
    /** Item label */
    children?: React.ReactNode;
    /** Key of theme.colors */
    color?: NsUIColor;
    /** Determines whether menu should be closed when item is clicked, overrides closeOnItemClick prop on Menu component */
    closeMenuOnClick?: boolean;
    /** Icon rendered on the left side of the label */
    icon?: React.ReactNode;
    /** Section rendered on the right side of the label */
    rightSection?: React.ReactNode;
}
export declare const _MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
export declare const MenuItem: (<C = "button">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, MenuItemProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(MenuItemProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof MenuItemProps> & {
    ref?: any;
}) | (MenuItemProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
//# sourceMappingURL=MenuItem.d.ts.map