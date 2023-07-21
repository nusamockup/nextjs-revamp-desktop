/// <reference types="react" />
import type { CSSObject } from './types';
import type { NsUITheme } from '../theme/types';
type EmotionStyles = CSSObject | CSSObject[];
interface GlobalStylesProps {
    styles: EmotionStyles | ((theme: NsUITheme) => EmotionStyles);
}
export declare function Global({ styles }: GlobalStylesProps): JSX.Element;
export {};
//# sourceMappingURL=Global.d.ts.map