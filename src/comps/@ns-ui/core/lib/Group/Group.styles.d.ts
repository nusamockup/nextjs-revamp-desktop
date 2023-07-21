import React from 'react';
import { NsUINumberSize } from '@ns-ui/styles';
export type GroupPosition = 'right' | 'center' | 'left' | 'apart';
export interface GroupStylesParams {
    position: GroupPosition;
    noWrap: boolean;
    grow: boolean;
    spacing: NsUINumberSize;
    align: React.CSSProperties['alignItems'];
    count: number;
}
export declare const GROUP_POSITIONS: {
    left: string;
    center: string;
    right: string;
    apart: string;
};
declare const _default: (params: GroupStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Group.styles.d.ts.map