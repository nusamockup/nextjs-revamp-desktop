import type { CSSProperties } from 'react';
import type { NsUIStyleSystemProps } from './NsUIStyleSystem';
import type { NsUITheme, ContextStylesParams } from './NsUITheme';
import type { CSSObject } from '../../tss';
export type Sx = CSSObject | ((theme: NsUITheme) => CSSObject);
export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;
export type Styles<StylesNames extends string, StylesParams extends Record<string, any> = never> = Partial<Record<StylesNames, CSSObject>> | ((theme: NsUITheme, params: StylesParams, context: ContextStylesParams) => Partial<Record<StylesNames, CSSObject>>);
export interface DefaultProps<StylesNames extends string = never, StylesParams extends Record<string, any> = Record<string, any>> extends NsUIStyleSystemProps {
    className?: string;
    style?: CSSProperties;
    sx?: Sx | (Sx | undefined)[];
    classNames?: ClassNames<StylesNames>;
    styles?: Styles<StylesNames, StylesParams>;
    unstyled?: boolean;
}
//# sourceMappingURL=DefaultProps.d.ts.map