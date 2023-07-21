import { NsUINumberSize } from '@ns-ui/core';
import { CarouselOrientation, CarouselBreakpoint } from '../types';
export interface CarouselSlideStylesParams {
    size: string | number;
    gap: NsUINumberSize;
    orientation: CarouselOrientation;
    includeGapInSize: boolean;
    breakpoints: CarouselBreakpoint[];
}
declare const _default: (params: CarouselSlideStylesParams, options?: import("@ns-ui/core").UseStylesOptions<string>) => {
    classes: {
        slide: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/core").NsUITheme;
};
export default _default;
//# sourceMappingURL=CarouselSlide.styles.d.ts.map