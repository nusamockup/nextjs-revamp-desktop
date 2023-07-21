import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
export interface CheckboxStylesParams {
    radius: NsUINumberSize;
    color: NsUIColor;
    transitionDuration: number;
    labelPosition: 'left' | 'right';
    error: boolean;
    indeterminate: boolean;
}
declare const _default: (params: CheckboxStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        icon: string;
        inner: string;
        input: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Checkbox.styles.d.ts.map