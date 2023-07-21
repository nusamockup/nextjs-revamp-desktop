import { NsUIColor, NsUINumberSize, NsUITheme } from '@ns-ui/styles';
export type AlertVariant = 'filled' | 'outline' | 'light';
export interface AlertStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
}
declare const _default: (params: AlertStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        wrapper: string;
        body: string;
        title: string;
        label: string;
        icon: string;
        message: string;
        closeButton: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Alert.styles.d.ts.map