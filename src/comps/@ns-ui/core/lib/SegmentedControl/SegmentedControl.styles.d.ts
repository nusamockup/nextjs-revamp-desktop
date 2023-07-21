import { NsUINumberSize, NsUIColor } from '@ns-ui/styles';
export declare const WRAPPER_PADDING = 4;
export interface SegmentedControlStylesParams {
    fullWidth: boolean;
    color: NsUIColor;
    radius: NsUINumberSize;
    shouldAnimate: boolean;
    transitionDuration: number;
    transitionTimingFunction: string;
    orientation: 'vertical' | 'horizontal';
}
declare const _default: (params: SegmentedControlStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        label: string;
        control: string;
        input: string;
        root: string;
        controlActive: string;
        indicator: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=SegmentedControl.styles.d.ts.map