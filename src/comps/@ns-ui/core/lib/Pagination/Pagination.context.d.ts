import { ClassNames, NsUIColor, NsUINumberSize, Styles } from '@ns-ui/styles';
import type { PaginationStylesNames } from './PaginationRoot/PaginationRoot';
interface PaginationContext {
    total: number;
    range: (number | 'dots')[];
    active: number;
    disabled: boolean;
    color: NsUIColor;
    radius: NsUINumberSize;
    getItemProps?(page: number): Record<string, any>;
    onChange(page: number): void;
    onNext(): void;
    onPrevious(): void;
    onFirst(): void;
    onLast(): void;
    stylesApi: {
        name: string;
        classNames?: ClassNames<PaginationStylesNames>;
        styles?: Styles<PaginationStylesNames>;
        unstyled?: boolean;
        variant?: string;
        size?: NsUINumberSize;
    };
}
export declare const PaginationProvider: ({ children, value }: {
    value: PaginationContext;
    children: import("react").ReactNode;
}) => JSX.Element, usePaginationContext: () => PaginationContext;
export {};
//# sourceMappingURL=Pagination.context.d.ts.map