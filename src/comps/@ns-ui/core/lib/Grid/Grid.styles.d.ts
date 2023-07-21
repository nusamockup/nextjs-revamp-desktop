/// <reference types="react" />
import { NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export interface GridStylesParams {
    gutter: NsUINumberSize;
    gutterXs: NsUINumberSize;
    gutterSm: NsUINumberSize;
    gutterMd: NsUINumberSize;
    gutterLg: NsUINumberSize;
    gutterXl: NsUINumberSize;
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignContent'];
}
declare const _default: (params: GridStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Grid.styles.d.ts.map