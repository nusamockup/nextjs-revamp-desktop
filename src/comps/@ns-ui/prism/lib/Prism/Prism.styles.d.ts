import { NsUINumberSize } from '@ns-ui/core';
export interface PrismStylesParams {
    colorScheme: 'light' | 'dark';
    native: boolean;
    maxLineSize: number | string;
    radius: NsUINumberSize;
}
declare const _default: (params: PrismStylesParams, options?: import("@ns-ui/core").UseStylesOptions<string>) => {
    classes: {
        scrollArea: string;
        root: string;
        code: string;
        copy: string;
        line: string;
        lineNumber: string;
        lineContent: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/core").NsUITheme;
};
export default _default;
//# sourceMappingURL=Prism.styles.d.ts.map