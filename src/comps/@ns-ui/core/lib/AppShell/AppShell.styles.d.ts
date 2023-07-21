import { NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export interface AppShellStylesParams {
    padding: NsUINumberSize;
    fixed: boolean;
    navbarOffsetBreakpoint: NsUINumberSize;
    asideOffsetBreakpoint: NsUINumberSize;
}
declare const _default: (params: AppShellStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        body: string;
        main: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=AppShell.styles.d.ts.map