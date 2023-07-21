/// <reference types="react" />
import { NsUINumberSize, ClassNames, Styles } from '@ns-ui/styles';
import type { ListStylesNames } from './List';
interface ListContextValue {
    spacing?: NsUINumberSize;
    center?: boolean;
    icon?: React.ReactNode;
    listStyleType?: string;
    withPadding?: boolean;
    size?: NsUINumberSize;
    classNames?: ClassNames<ListStylesNames>;
    styles?: Styles<ListStylesNames>;
    unstyled?: boolean;
    variant?: string;
}
export declare const ListProvider: ({ children, value }: {
    value: ListContextValue;
    children: import("react").ReactNode;
}) => JSX.Element, useListContext: () => ListContextValue;
export {};
//# sourceMappingURL=List.context.d.ts.map