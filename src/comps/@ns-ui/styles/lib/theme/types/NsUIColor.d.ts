import { Tuple } from './Tuple';
export type DefaultNsUIColor = 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'teal' | (string & {});
export type NsUIThemeColorsOverride = {};
export type NsUIThemeColors = NsUIThemeColorsOverride extends {
    colors: Record<infer CustomColors, Tuple<string, 10>>;
} ? Record<CustomColors, Tuple<string, 10>> : Record<DefaultNsUIColor, Tuple<string, 10>>;
export type NsUIColor = keyof NsUIThemeColors;
//# sourceMappingURL=NsUIColor.d.ts.map