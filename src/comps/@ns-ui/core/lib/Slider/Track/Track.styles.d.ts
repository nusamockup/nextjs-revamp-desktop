import { NsUINumberSize, NsUIColor } from '@ns-ui/styles';
interface TrackStyles {
    radius: NsUINumberSize;
    color: NsUIColor;
    disabled: boolean;
    inverted: boolean;
}
declare const _default: (params: TrackStyles, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        track: string;
        bar: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Track.styles.d.ts.map