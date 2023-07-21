/// <reference types="react" />
import { NsUINumberSize } from '@ns-ui/styles';
export type HorizontalSectionWidth = Partial<Record<string, string | number>>;
export interface HorizontalSectionPosition {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
interface HorizontalSectionStyles {
    width: Partial<Record<string, string | number>>;
    height: string | number;
    position: HorizontalSectionPosition;
    hiddenBreakpoint: NsUINumberSize;
    fixed: boolean;
    zIndex: React.CSSProperties['zIndex'];
    section: 'navbar' | 'aside';
    layout: 'default' | 'alt';
    withBorder: boolean;
}
declare const _default: (params: HorizontalSectionStyles, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=HorizontalSection.styles.d.ts.map