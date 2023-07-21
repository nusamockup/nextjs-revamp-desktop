import { NsUINumberSize, Styles, ClassNames } from '@ns-ui/core';
import { CarouselOrientation, Embla, CarouselBreakpoint } from './types';
import type { CarouselStylesNames } from './Carousel';
interface CarouselContext {
    embla: Embla;
    slideSize: string | number;
    slideGap: NsUINumberSize;
    orientation: CarouselOrientation;
    includeGapInSize: boolean;
    breakpoints: CarouselBreakpoint[];
    classNames: ClassNames<CarouselStylesNames>;
    styles: Styles<CarouselStylesNames>;
    unstyled: boolean;
    variant: string;
}
export declare const CarouselProvider: ({ children, value }: {
    value: CarouselContext;
    children: import("react").ReactNode;
}) => JSX.Element, useCarouselContext: () => CarouselContext;
export {};
//# sourceMappingURL=Carousel.context.d.ts.map