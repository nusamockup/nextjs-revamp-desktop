/// <reference types="react" />
import { NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export type ColSpan = number | 'auto' | 'content';
interface ColStyles {
    gutter: NsUINumberSize;
    gutterXs: NsUINumberSize;
    gutterSm: NsUINumberSize;
    gutterMd: NsUINumberSize;
    gutterLg: NsUINumberSize;
    gutterXl: NsUINumberSize;
    columns: number;
    grow: boolean;
    offset: number;
    offsetXs: number;
    offsetSm: number;
    offsetMd: number;
    offsetLg: number;
    offsetXl: number;
    span: ColSpan;
    xs: ColSpan;
    sm: ColSpan;
    md: ColSpan;
    lg: ColSpan;
    xl: ColSpan;
    order: React.CSSProperties['order'];
    orderXs: React.CSSProperties['order'];
    orderSm: React.CSSProperties['order'];
    orderMd: React.CSSProperties['order'];
    orderLg: React.CSSProperties['order'];
    orderXl: React.CSSProperties['order'];
}
declare const _default: (params: ColStyles, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        col: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Col.styles.d.ts.map