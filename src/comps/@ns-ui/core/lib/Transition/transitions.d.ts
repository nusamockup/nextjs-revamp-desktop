import React from 'react';
export interface NsUITransitionStyles {
    common?: React.CSSProperties;
    in: React.CSSProperties;
    out: React.CSSProperties;
    transitionProperty: React.CSSProperties['transitionProperty'];
}
export type NsUITransitionName = 'fade' | 'skew-up' | 'skew-down' | 'rotate-right' | 'rotate-left' | 'slide-down' | 'slide-up' | 'slide-right' | 'slide-left' | 'scale-y' | 'scale-x' | 'scale' | 'pop' | 'pop-top-left' | 'pop-top-right' | 'pop-bottom-left' | 'pop-bottom-right';
export type NsUITransition = NsUITransitionName | NsUITransitionStyles;
export declare const transitions: Record<NsUITransitionName, NsUITransitionStyles>;
//# sourceMappingURL=transitions.d.ts.map