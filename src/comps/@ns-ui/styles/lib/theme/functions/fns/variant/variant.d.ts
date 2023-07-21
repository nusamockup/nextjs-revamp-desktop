import { CSSProperties } from 'react';
import type { NsUIColor, NsUIGradient, NsUIThemeBase } from '../../../types';
export interface VariantInput {
    variant: string;
    color?: NsUIColor;
    gradient?: NsUIGradient;
    primaryFallback?: boolean;
}
export interface VariantOutput {
    border: CSSProperties['borderColor'];
    background: CSSProperties['backgroundColor'];
    color: CSSProperties['color'];
    hover: CSSProperties['backgroundColor'];
}
export declare function variant(theme: NsUIThemeBase): ({ variant, color, gradient, primaryFallback }: VariantInput) => VariantOutput;
//# sourceMappingURL=variant.d.ts.map