import { NsUISize, NsUITheme } from '@ns-ui/styles';
type Breakpoints<T> = Partial<Record<NsUISize | (string & {}), T>>;
export declare function getSortedBreakpoints<T>(breakpoints: Breakpoints<T>, theme: NsUITheme): [string, T][];
export {};
//# sourceMappingURL=get-sorted-breakpoints.d.ts.map