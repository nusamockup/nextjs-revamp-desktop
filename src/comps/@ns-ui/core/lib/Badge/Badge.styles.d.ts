import { NsUINumberSize, NsUIColor, NsUIGradient, NsUITheme } from '@ns-ui/styles';
export interface BadgeStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    gradient: NsUIGradient;
    fullWidth: boolean;
}
declare const _default: (params: BadgeStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        leftSection: string;
        rightSection: string;
        inner: string;
        root: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Badge.styles.d.ts.map