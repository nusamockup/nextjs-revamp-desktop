import { NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export interface InputStylesParams {
    radius: NsUINumberSize;
    multiline: boolean;
    invalid: boolean;
    rightSectionWidth: string | number;
    withRightSection: boolean;
    iconWidth: string | number;
    offsetBottom: boolean;
    offsetTop: boolean;
    pointer: boolean;
}
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: InputStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        wrapper: string;
        input: string;
        icon: string;
        rightSection: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Input.styles.d.ts.map