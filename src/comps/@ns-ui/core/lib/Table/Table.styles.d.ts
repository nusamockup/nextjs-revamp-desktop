import { NsUINumberSize } from '@ns-ui/styles';
export interface TableStylesParams {
    captionSide: 'top' | 'bottom';
    horizontalSpacing: NsUINumberSize;
    verticalSpacing: NsUINumberSize;
    fontSize: NsUINumberSize;
    withBorder: boolean;
    withColumnBorders: boolean;
}
declare const _default: (params: TableStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Table.styles.d.ts.map