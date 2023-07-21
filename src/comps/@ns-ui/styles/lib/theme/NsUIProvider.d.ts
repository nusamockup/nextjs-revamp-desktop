import React from 'react';
import type { EmotionCache } from '@emotion/cache';
import type { NsUIThemeOverride, NsUITheme } from './types';
export declare function useNsUITheme(): NsUITheme;
export declare function useNsUIProviderStyles(component: string | string[]): {
    styles: Record<string, import("..").CSSObject> | ((theme: NsUITheme, params: any, context: import("./types").ContextStylesParams) => Record<string, import("..").CSSObject>);
    classNames: Record<string, string>;
    variants: Record<PropertyKey, (theme: NsUITheme, params: any, context: import("./types").ContextStylesParams) => Record<string, import("..").CSSObject>>;
    sizes: Record<PropertyKey, (theme: NsUITheme, params: any, context: import("./types").ContextStylesParams) => Record<string, import("..").CSSObject>>;
}[];
export declare function useNsUIEmotionCache(): EmotionCache;
export declare function useComponentDefaultProps<T extends Record<string, any>, U extends Partial<T> = {}>(component: string, defaultProps: U, props: T): T & {
    [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
};
export interface NsUIProviderProps {
    theme?: NsUIThemeOverride;
    emotionCache?: EmotionCache;
    withNormalizeCSS?: boolean;
    withGlobalStyles?: boolean;
    withCSSVariables?: boolean;
    children: React.ReactNode;
    inherit?: boolean;
}
export declare function NsUIProvider({ theme, emotionCache, withNormalizeCSS, withGlobalStyles, withCSSVariables, inherit, children, }: NsUIProviderProps): JSX.Element;
export declare namespace NsUIProvider {
    var displayName: string;
}
//# sourceMappingURL=NsUIProvider.d.ts.map