import { NsUINumberSize, NsUIColor, NsUITheme, NsUIGradient } from '@ns-ui/styles';
export declare const AVATAR_VARIANTS: string[];
export interface AvatarStylesParams {
    radius: NsUINumberSize;
    color: NsUIColor;
    withinGroup: boolean;
    spacing: NsUINumberSize;
    gradient: NsUIGradient;
}
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: AvatarStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
        image: string;
        placeholder: string;
        placeholderIcon: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=Avatar.styles.d.ts.map