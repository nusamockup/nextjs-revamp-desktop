import React from 'react';
import { DefaultProps, Selectors } from '@ns-ui/styles';
import useStyles from './ModalBaseTitle.styles';
export type ModalBaseTitleStylesNames = Selectors<typeof useStyles>;
export interface ModalBaseTitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h2'> {
}
export declare const ModalBaseTitle: React.ForwardRefExoticComponent<ModalBaseTitleProps & React.RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=ModalBaseTitle.d.ts.map