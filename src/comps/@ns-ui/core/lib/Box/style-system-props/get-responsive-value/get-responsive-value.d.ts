import { NsUITheme } from '@ns-ui/styles';
export type StyleProperty = string | string[];
interface GetResponsiveStyles {
    value: any;
    theme: NsUITheme;
    getValue: (value: any, theme: NsUITheme) => any;
    property: StyleProperty;
}
export declare function getResponsiveValue({ value, theme, getValue, property }: GetResponsiveStyles): {};
export {};
//# sourceMappingURL=get-responsive-value.d.ts.map