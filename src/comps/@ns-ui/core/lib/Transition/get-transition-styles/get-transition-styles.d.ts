/// <reference types="react" />
import { NsUITransition } from '../transitions';
declare const transitionStatuses: {
    readonly entering: "in";
    readonly entered: "in";
    readonly exiting: "out";
    readonly exited: "out";
    readonly 'pre-exiting': "out";
    readonly 'pre-entering': "out";
};
export declare function getTransitionStyles({ transition, state, duration, timingFunction, }: {
    transition: NsUITransition;
    state: keyof typeof transitionStatuses;
    duration: number;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
}): React.CSSProperties;
export {};
//# sourceMappingURL=get-transition-styles.d.ts.map