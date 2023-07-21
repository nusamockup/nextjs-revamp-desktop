import { NsUINumberSize } from '@ns-ui/styles';
interface DefaultLabelStyles {
    radius: NsUINumberSize;
    disabled: boolean;
    readOnly: boolean;
}
export declare const sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const _default: (params: DefaultLabelStyles, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        defaultValue: string;
        defaultValueRemove: string;
        defaultValueLabel: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=DefaultValue.styles.d.ts.map