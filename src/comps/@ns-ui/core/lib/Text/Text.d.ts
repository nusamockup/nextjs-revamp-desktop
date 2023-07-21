import React from 'react';
import { DefaultProps, NsUIGradient, NsUIColor, NsUINumberSize, Variants } from '@ns-ui/styles';
export interface TextProps extends DefaultProps {
    __staticSelector?: string;
    /** Text content */
    children?: React.ReactNode;
    /** Key of theme.fontSizes or any valid CSS value to set font-size */
    size?: NsUINumberSize;
    /** Key of theme.colors or any valid CSS color */
    color?: 'dimmed' | NsUIColor;
    /** Sets font-weight css property */
    weight?: React.CSSProperties['fontWeight'];
    /** Sets text-transform css property */
    transform?: React.CSSProperties['textTransform'];
    /** Sets text-align css property */
    align?: React.CSSProperties['textAlign'];
    /** Link or text variant */
    variant?: Variants<'text' | 'gradient'>;
    /** CSS -webkit-line-clamp property */
    lineClamp?: number;
    /** CSS truncate overflowing text with an ellipsis */
    truncate?: 'end' | 'start' | true;
    /** Sets line-height to 1 for centering */
    inline?: boolean;
    /** Underline the text */
    underline?: boolean;
    /** Add strikethrough styles */
    strikethrough?: boolean;
    /** Adds font-style: italic style */
    italic?: boolean;
    /** Inherit font properties from parent element */
    inherit?: boolean;
    /** Controls gradient settings in gradient variant only */
    gradient?: NsUIGradient;
    /** Shorthand for component="span" */
    span?: boolean;
}
export declare const _Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLDivElement>>;
export declare const Text: (<C = "div">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, TextProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(TextProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof TextProps> & {
    ref?: any;
}) | (TextProps & {
    component: React.ElementType<any>;
})>, never> & Record<string, never>;
//# sourceMappingURL=Text.d.ts.map