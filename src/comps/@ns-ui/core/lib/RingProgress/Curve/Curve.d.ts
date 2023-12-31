import React from 'react';
import { NsUIColor } from '@ns-ui/styles';
interface CurveProps extends React.ComponentPropsWithRef<'circle'> {
    value?: number;
    size: number;
    offset: number;
    sum: number;
    thickness: number;
    lineRoundCaps: boolean;
    root?: boolean;
    color?: NsUIColor;
    tooltip?: React.ReactNode;
}
export declare function Curve({ size, value, offset, sum, thickness, root, color, lineRoundCaps, tooltip, ...others }: CurveProps): JSX.Element;
export declare namespace Curve {
    var displayName: string;
}
export {};
//# sourceMappingURL=Curve.d.ts.map