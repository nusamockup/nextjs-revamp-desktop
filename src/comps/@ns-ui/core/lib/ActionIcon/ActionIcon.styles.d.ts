import { NsUINumberSize, NsUIColor, NsUITheme, NsUIGradient } from '@ns-ui/styles';
export declare const ACTION_ICON_VARIANTS: string[];
export interface ActionIconStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    gradient: NsUIGradient;
}
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: ActionIconStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=ActionIcon.styles.d.ts.map