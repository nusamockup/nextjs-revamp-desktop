/// <reference types="react" />
import { NsUINumberSize } from '@ns-ui/styles';
export type ScrollAreaComponent = React.FC<{
    mah: React.CSSProperties['maxHeight'];
    children: React.ReactNode;
}>;
interface ModalContext {
    yOffset: string | number;
    radius: NsUINumberSize;
    scrollAreaComponent: ScrollAreaComponent;
}
export declare const ModalProvider: ({ children, value }: {
    value: ModalContext;
    children: import("react").ReactNode;
}) => JSX.Element, useModalContext: () => ModalContext;
export {};
//# sourceMappingURL=Modal.context.d.ts.map