import { NsUIColor, NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export interface NavLinkStylesParams {
    color: NsUIColor;
    noWrap: boolean;
    childrenOffset: NsUINumberSize;
    alignIcon: 'top' | 'center';
}
declare const _default: (params: NavLinkStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        icon: string;
        rightSection: string;
        body: string;
        label: string;
        description: string;
        children: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=NavLink.styles.d.ts.map