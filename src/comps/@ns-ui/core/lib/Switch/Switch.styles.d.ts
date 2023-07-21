import { NsUINumberSize, NsUIColor } from '@ns-ui/styles';
export interface SwitchStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    labelPosition: 'left' | 'right';
    error: boolean;
}
declare const _default: (params: SwitchStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        input: string;
        track: string;
        thumb: string;
        trackLabel: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Switch.styles.d.ts.map