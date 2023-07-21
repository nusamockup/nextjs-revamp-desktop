import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
interface PaginationControlStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    withPadding: boolean;
}
declare const _default: (params: PaginationControlStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        control: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=PaginationControl.styles.d.ts.map