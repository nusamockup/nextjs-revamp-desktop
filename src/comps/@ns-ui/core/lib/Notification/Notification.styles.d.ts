import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
export interface NotificationStylesParams {
    color: NsUIColor;
    radius: NsUINumberSize;
    withTitle: boolean;
}
declare const _default: (params: NotificationStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        closeButton: string;
        icon: string;
        root: string;
        body: string;
        loader: string;
        title: string;
        description: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Notification.styles.d.ts.map