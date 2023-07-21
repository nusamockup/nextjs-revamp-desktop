import React from 'react';
import { NsUINumberSize, CSSObject, NsUITheme } from '@ns-ui/styles';
export interface MediaQueryProps {
    className?: string;
    /** Child that should be shown at given breakpoint, it must accept className prop */
    children: React.ReactNode;
    /** Styles applied to child when viewport is smaller than given breakpoint */
    smallerThan?: NsUINumberSize;
    /** Styles applied to child when viewport is larger than given breakpoint */
    largerThan?: NsUINumberSize;
    /** Any other media query */
    query?: string;
    /** Styles applied to child when breakpoint matches */
    styles: CSSObject | ((theme: NsUITheme) => CSSObject);
}
export declare function MediaQuery(props: MediaQueryProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare namespace MediaQuery {
    var displayName: string;
}
//# sourceMappingURL=MediaQuery.d.ts.map