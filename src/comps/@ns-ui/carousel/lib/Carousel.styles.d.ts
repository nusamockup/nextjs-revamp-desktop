/// <reference types="react" />
import { NsUINumberSize } from '@ns-ui/core';
import { CarouselBreakpoint } from './types';
export interface CarouselStylesParams {
    controlSize: number | string;
    controlsOffset: NsUINumberSize;
    orientation: 'vertical' | 'horizontal';
    height: React.CSSProperties['height'];
    includeGapInSize: boolean;
    breakpoints: CarouselBreakpoint[];
    slideGap: NsUINumberSize;
}
declare const _default: (params: CarouselStylesParams, options?: import("@ns-ui/core").UseStylesOptions<string>) => {
    classes: {
        root: string;
        viewport: string;
        container: string;
        controls: string;
        control: string;
        indicators: string;
        indicator: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/core").NsUITheme;
};
export default _default;
//# sourceMappingURL=Carousel.styles.d.ts.map