import { NsUINumberSize, NsUIColor } from '@ns-ui/styles';
export interface StepperStylesParams {
    contentPadding: NsUINumberSize;
    iconSize?: number;
    color: NsUIColor;
    orientation: 'vertical' | 'horizontal';
    iconPosition: 'right' | 'left';
    breakpoint: NsUINumberSize;
}
declare const _default: (params: StepperStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        steps: string;
        separator: string;
        separatorActive: string;
        content: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Stepper.styles.d.ts.map