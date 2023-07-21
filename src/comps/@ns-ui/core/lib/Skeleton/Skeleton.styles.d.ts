import { NsUINumberSize } from '@ns-ui/styles';
export interface SkeletonStylesParams {
    height: number | string;
    width: number | string;
    circle: boolean;
    radius: NsUINumberSize;
    animate: boolean;
}
export declare const fade: import("@emotion/react").Keyframes;
declare const _default: (params: SkeletonStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        visible: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Skeleton.styles.d.ts.map