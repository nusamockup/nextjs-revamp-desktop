import { NsUINumberSize } from '@ns-ui/styles';
export interface OverlayStylesParams {
    color: string;
    opacity: number;
    blur: number | string;
    radius: NsUINumberSize;
    gradient: string;
    fixed: boolean;
    zIndex: any;
}
declare const _default: (params: OverlayStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Overlay.styles.d.ts.map