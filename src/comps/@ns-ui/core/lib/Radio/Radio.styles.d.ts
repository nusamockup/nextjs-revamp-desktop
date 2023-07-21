import { NsUIColor } from '@ns-ui/styles';
export interface RadioStylesParams {
    color: NsUIColor;
    transitionDuration: number;
    labelPosition: 'left' | 'right';
    error: boolean;
}
declare const _default: (params: RadioStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        inner: string;
        icon: string;
        radio: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Radio.styles.d.ts.map