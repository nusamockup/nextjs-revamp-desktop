/// <reference types="react" />
import type { NsUIColor } from '@ns-ui/styles';
interface CurveData extends React.ComponentPropsWithRef<'circle'> {
    value: number;
    color: NsUIColor;
    tooltip?: React.ReactNode;
}
interface RootCurveData extends React.ComponentPropsWithRef<'circle'> {
    color?: NsUIColor;
}
interface GetCurves {
    sections: CurveData[];
    size: number;
    thickness: number;
    renderRoundedLineCaps: boolean;
    rootColor?: NsUIColor;
}
interface Curve {
    sum: number;
    offset: number;
    root: boolean;
    data: CurveData | RootCurveData;
    lineRoundCaps?: boolean;
}
export declare function getCurves({ size, thickness, sections, renderRoundedLineCaps, rootColor, }: GetCurves): Curve[];
export {};
//# sourceMappingURL=get-curves.d.ts.map