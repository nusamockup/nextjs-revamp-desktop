import type { NsUINumberSize } from '@ns-ui/core';
import type { EmblaCarouselType } from 'embla-carousel-react';
export type Embla = EmblaCarouselType;
export type CarouselOrientation = 'vertical' | 'horizontal';
export interface CarouselBreakpoint {
    maxWidth?: NsUINumberSize;
    minWidth?: NsUINumberSize;
    slideSize: string | number;
    slideGap?: NsUINumberSize;
}
//# sourceMappingURL=types.d.ts.map