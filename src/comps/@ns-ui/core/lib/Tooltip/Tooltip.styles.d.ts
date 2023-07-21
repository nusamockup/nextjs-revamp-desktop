import { NsUIColor, NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export interface TooltipStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    width: number | 'auto';
    multiline: boolean;
}
declare const _default: (params: TooltipStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        tooltip: string;
        arrow: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Tooltip.styles.d.ts.map