import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
export interface StepStylesParams {
    color: NsUIColor;
    iconSize: number;
    radius: NsUINumberSize;
    allowStepClick: boolean;
    iconPosition: 'right' | 'left';
    orientation: 'vertical' | 'horizontal';
}
export declare const iconSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: StepStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        stepLoader: string;
        step: string;
        stepWrapper: string;
        verticalSeparator: string;
        verticalSeparatorActive: string;
        stepIcon: string;
        stepCompletedIcon: string;
        stepBody: string;
        stepLabel: string;
        stepDescription: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Step.styles.d.ts.map