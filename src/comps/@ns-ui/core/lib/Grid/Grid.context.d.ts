import type { NsUINumberSize } from '@ns-ui/styles';
interface GridContextValue {
    gutter: NsUINumberSize;
    gutterXs: NsUINumberSize;
    gutterSm: NsUINumberSize;
    gutterMd: NsUINumberSize;
    gutterLg: NsUINumberSize;
    gutterXl: NsUINumberSize;
    grow: boolean;
    columns: number;
}
export declare const GridProvider: ({ children, value }: {
    value: GridContextValue;
    children: import("react").ReactNode;
}) => JSX.Element, useGridContext: () => GridContextValue;
export {};
//# sourceMappingURL=Grid.context.d.ts.map