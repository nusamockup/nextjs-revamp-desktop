import { NsUINumberSize, CSSObject, NsUITheme } from '@ns-ui/styles';
export interface MediaQueryStylesParams {
    smallerThan: NsUINumberSize;
    largerThan: NsUINumberSize;
    styles: CSSObject | ((theme: NsUITheme) => CSSObject);
    query: string;
}
declare const _default: (params: MediaQueryStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        media: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=MediaQuery.styles.d.ts.map