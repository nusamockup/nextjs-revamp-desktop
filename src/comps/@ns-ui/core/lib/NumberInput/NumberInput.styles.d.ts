import { NsUINumberSize } from '@ns-ui/styles';
export interface NumberInputStylesParams {
    radius: NsUINumberSize;
}
export declare const CONTROL_SIZES: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: NumberInputStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        rightSection: string;
        control: string;
        controlUp: string;
        controlDown: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=NumberInput.styles.d.ts.map