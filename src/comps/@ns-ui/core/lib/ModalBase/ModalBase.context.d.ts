import { ClassNames, NsUINumberSize, NsUIShadow, Styles } from '@ns-ui/styles';
import { TransitionOverride } from '../Transition';
import type { ModalBaseStylesNames } from './ModalBase';
interface ModalBaseContext {
    __staticSelector: string;
    opened: boolean;
    onClose(): void;
    closeOnClickOutside: boolean;
    transitionProps: TransitionOverride;
    zIndex: number;
    padding: NsUINumberSize;
    id: string;
    getTitleId(): string;
    getBodyId(): string;
    titleMounted: boolean;
    bodyMounted: boolean;
    setTitleMounted(mounted: boolean): void;
    setBodyMounted(mounted: boolean): void;
    trapFocus: boolean;
    closeOnEscape: boolean;
    shadow: NsUIShadow;
    stylesApi: {
        name: string;
        size: NsUINumberSize;
        variant: string;
        classNames: ClassNames<ModalBaseStylesNames>;
        styles: Styles<ModalBaseStylesNames>;
        unstyled: boolean;
    };
}
export declare const ModalBaseProvider: ({ children, value }: {
    value: ModalBaseContext;
    children: import("react").ReactNode;
}) => JSX.Element, useModalBaseContext: () => ModalBaseContext;
export {};
//# sourceMappingURL=ModalBase.context.d.ts.map