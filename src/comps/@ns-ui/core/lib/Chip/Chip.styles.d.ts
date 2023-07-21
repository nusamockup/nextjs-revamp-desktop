import { NsUINumberSize, NsUIColor, NsUITheme } from '@ns-ui/styles';
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export interface ChipStylesParams {
    radius: NsUINumberSize;
    color: NsUIColor;
}
declare const _default: (params: ChipStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        label: string;
        iconWrapper: string;
        checkIcon: string;
        input: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Chip.styles.d.ts.map