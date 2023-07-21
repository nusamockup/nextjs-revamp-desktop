import { NsUINumberSize } from '@ns-ui/core';
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export interface DayStylesParams {
    radius: NsUINumberSize;
    isStatic: boolean;
}
declare const _default: (params: DayStylesParams, options?: import("@ns-ui/core").UseStylesOptions<string>) => {
    classes: {
        day: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/core").NsUITheme;
};
export default _default;
//# sourceMappingURL=Day.styles.d.ts.map