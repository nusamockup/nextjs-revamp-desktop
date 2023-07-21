import { NsUINumberSize } from '@ns-ui/styles';
export interface ListStylesParams {
    withPadding: boolean;
    listStyleType: string;
    spacing: NsUINumberSize;
    center: boolean;
}
declare const _default: (params: ListStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=List.styles.d.ts.map