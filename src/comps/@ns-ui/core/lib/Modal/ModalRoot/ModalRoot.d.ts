import React from 'react';
import { NsUINumberSize } from '@ns-ui/styles';
import { ModalBaseSettings } from '../../ModalBase';
import { ScrollAreaComponent } from '../Modal.context';
export interface ModalRootProps extends ModalBaseSettings {
    /** Top/bottom modal offset, 5vh by default */
    yOffset?: React.CSSProperties['marginTop'];
    /** Left/right modal offset, 5vw by default */
    xOffset?: React.CSSProperties['marginLeft'];
    /** Scroll area component, ScrollArea.Autosize by default */
    scrollAreaComponent?: ScrollAreaComponent;
    /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
    radius?: NsUINumberSize;
    /** Determines whether the modal should be centered vertically, false by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen */
    fullScreen?: boolean;
}
export declare function ModalRoot(props: ModalRootProps): JSX.Element;
//# sourceMappingURL=ModalRoot.d.ts.map