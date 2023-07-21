/// <reference types="react" />
import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
import { IndicatorPosition } from './Indicator.types';
export interface IndicatorStylesParams {
    radius: NsUINumberSize;
    color: NsUIColor;
    position: IndicatorPosition;
    offset: number;
    inline: boolean;
    withBorder: boolean;
    withLabel: boolean;
    zIndex: React.CSSProperties['zIndex'];
}
declare const _default: (params: IndicatorStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        indicator: string;
        processing: string;
        common: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Indicator.styles.d.ts.map