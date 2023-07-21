/// <reference types="react" />
import { NsUITheme, NsUIColor, NsUIGradient } from '@ns-ui/styles';
export interface TextStylesParams {
    color: 'dimmed' | NsUIColor;
    lineClamp: number;
    truncate: 'end' | 'start' | boolean;
    inline: boolean;
    inherit: boolean;
    underline: boolean;
    strikethrough: boolean;
    italic: boolean;
    gradient: NsUIGradient;
    transform: React.CSSProperties['textTransform'];
    align: React.CSSProperties['textAlign'];
    weight: React.CSSProperties['fontWeight'];
}
declare const _default: (params: TextStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        gradient: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Text.styles.d.ts.map