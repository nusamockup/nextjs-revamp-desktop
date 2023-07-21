import { NsUINumberSize } from '@ns-ui/styles';
export interface SimpleGridBreakpoint {
    maxWidth?: NsUINumberSize;
    minWidth?: NsUINumberSize;
    cols: number;
    spacing?: NsUINumberSize;
    verticalSpacing?: NsUINumberSize;
}
export interface SimpleGridStylesParams {
    spacing: NsUINumberSize;
    verticalSpacing: NsUINumberSize;
    breakpoints: SimpleGridBreakpoint[];
    cols: number;
}
declare const _default: (params: SimpleGridStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=SimpleGrid.styles.d.ts.map