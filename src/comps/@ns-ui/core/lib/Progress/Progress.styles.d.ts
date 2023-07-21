import { NsUINumberSize, NsUIColor } from '@ns-ui/styles';
export interface ProgressStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
}
declare const _default: (params: ProgressStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        bar: string;
        label: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Progress.styles.d.ts.map