import { NsUINumberSize, NsUIColor, NsUITheme, NsUIGradient } from '@ns-ui/styles';
export declare const BUTTON_VARIANTS: string[];
export interface ButtonStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    fullWidth: boolean;
    compact: boolean;
    gradient: NsUIGradient;
    withRightIcon: boolean;
    withLeftIcon: boolean;
}
export declare const sizes: {
    xs: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    sm: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    md: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    lg: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    xl: {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    'compact-xs': {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    'compact-sm': {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    'compact-md': {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    'compact-lg': {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
    'compact-xl': {
        height: string;
        paddingLeft: string;
        paddingRight: string;
    };
};
declare const _default: (params: ButtonStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        icon: string;
        leftIcon: string;
        rightIcon: string;
        centerLoader: string;
        inner: string;
        label: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Button.styles.d.ts.map