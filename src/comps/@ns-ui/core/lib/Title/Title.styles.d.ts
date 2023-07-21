/// <reference types="react" />
import { NsUITheme } from '@ns-ui/styles';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface TitleStylesParams {
    element: HeadingElement;
    weight: React.CSSProperties['fontWeight'];
    inline: boolean;
}
declare const _default: (params: TitleStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Title.styles.d.ts.map