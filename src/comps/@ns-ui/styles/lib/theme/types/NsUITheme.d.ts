import type { CSSProperties } from 'react';
import type { NsUISizes, NsUISize, NsUINumberSize } from './NsUISize';
import type { DeepPartial } from './DeepPartial';
import type { NsUIThemeColors } from './NsUIColor';
import type { NsUIGradient } from './NsUIGradient';
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant';
import type { ColorScheme } from './ColorScheme';
import type { CSSObject } from '../../tss';
export type LoaderType = 'bars' | 'oval' | 'dots';
export type NsUIThemeOther = Record<string, any>;
export type NsUIThemeComponents = Record<string, ThemeComponent>;
export interface HeadingStyle {
    fontSize: string;
    fontWeight: CSSProperties['fontWeight'];
    lineHeight: CSSProperties['lineHeight'];
}
type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface NsUIPrimaryShade {
    light: Shade;
    dark: Shade;
}
interface NsUIFocusRingStyles {
    styles(theme: NsUIThemeBase): CSSObject;
    resetStyles(theme: NsUIThemeBase): CSSObject;
    inputStyles(theme: NsUIThemeBase): CSSObject;
}
interface NsUIThemeFunctions {
    fontStyles(): any;
    focusStyles(selector?: string): any;
    cover(offset?: number | string): any;
    themeColor(color: string, shade?: number, primaryFallback?: boolean, useSplittedShade?: boolean): string;
    rgba(color: string, alpha: number): string;
    linearGradient(deg: number, ...colors: string[]): string;
    radialGradient(...colors: string[]): string;
    gradient(gradient?: NsUIGradient): string;
    smallerThan(breakpoint: NsUINumberSize): string;
    largerThan(breakpoint: NsUINumberSize): string;
    lighten(color: string, alpha: number): string;
    darken(color: string, alpha: number): string;
    radius(size?: NsUINumberSize | (string & {})): string | number;
    variant(payload: VariantInput): VariantOutput;
    primaryShade(colorScheme?: ColorScheme): Shade;
    hover(hoverStyle: CSSObject): any;
    primaryColor(colorScheme?: ColorScheme): string;
    placeholderStyles(): any;
    dimmed(): string;
}
export interface NsUITheme {
    dir: 'ltr' | 'rtl';
    primaryShade: Shade | NsUIPrimaryShade;
    focusRing: 'auto' | 'always' | 'never';
    defaultRadius: NsUINumberSize | (string & {});
    loader: LoaderType;
    colorScheme: ColorScheme;
    white: string;
    black: string;
    colors: NsUIThemeColors;
    fontFamily: CSSProperties['fontFamily'];
    lineHeight: CSSProperties['lineHeight'];
    transitionTimingFunction: CSSProperties['transitionTimingFunction'];
    fontFamilyMonospace: CSSProperties['fontFamily'];
    primaryColor: keyof NsUIThemeColors;
    respectReducedMotion: boolean;
    cursorType: 'default' | 'pointer';
    defaultGradient: NsUIGradient;
    fontSizes: NsUISizes;
    radius: NsUISizes;
    spacing: NsUISizes;
    breakpoints: NsUISizes;
    shadows: Record<NsUISize, string>;
    headings: {
        fontFamily: CSSProperties['fontFamily'];
        fontWeight: CSSProperties['fontWeight'];
        sizes: {
            h1: HeadingStyle;
            h2: HeadingStyle;
            h3: HeadingStyle;
            h4: HeadingStyle;
            h5: HeadingStyle;
            h6: HeadingStyle;
        };
    };
    fn: NsUIThemeFunctions;
    other: NsUIThemeOther;
    activeStyles: CSSObject;
    datesLocale: string;
    components: NsUIThemeComponents;
    globalStyles: (theme: NsUITheme) => CSSObject;
    focusRingStyles: NsUIFocusRingStyles;
}
export interface ContextStylesParams {
    variant?: string;
    size?: string | number;
}
interface ThemeComponent {
    defaultProps?: Record<string, any> | ((theme: NsUITheme) => Record<string, any>);
    classNames?: Record<string, string>;
    styles?: Record<string, CSSObject> | ((theme: NsUITheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>);
    variants?: Record<PropertyKey, (theme: NsUITheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>>;
    sizes?: Record<PropertyKey, (theme: NsUITheme, params: any, context: ContextStylesParams) => Record<string, CSSObject>>;
}
export type NsUIThemeBase = Omit<NsUITheme, 'fn'>;
export type NsUIThemeOverride = DeepPartial<Omit<NsUIThemeBase, 'other' | 'components'>> & Partial<Pick<NsUIThemeBase, 'other' | 'components'>>;
export {};
//# sourceMappingURL=NsUITheme.d.ts.map