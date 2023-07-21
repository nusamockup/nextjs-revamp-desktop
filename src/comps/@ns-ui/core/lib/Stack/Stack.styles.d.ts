/// <reference types="react" />
import { NsUINumberSize } from '@ns-ui/styles';
export interface StackStylesParams {
    spacing: NsUINumberSize;
    align: React.CSSProperties['alignItems'];
    justify: React.CSSProperties['justifyContent'];
}
declare const _default: (params: StackStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Stack.styles.d.ts.map