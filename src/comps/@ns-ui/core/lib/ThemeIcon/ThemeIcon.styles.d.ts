import { NsUINumberSize, NsUIColor, NsUIGradient, NsUITheme } from '@ns-ui/styles';
export interface ThemeIconStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    variant: string;
    gradient: NsUIGradient;
}
declare const _default: (params: ThemeIconStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=ThemeIcon.styles.d.ts.map