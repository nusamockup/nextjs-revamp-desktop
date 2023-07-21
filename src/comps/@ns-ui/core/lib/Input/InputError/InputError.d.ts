import React from 'react';
import { DefaultProps, NsUISize, Selectors } from '@ns-ui/styles';
import useStyles from './InputError.styles';
export type InputErrorStylesNames = Selectors<typeof useStyles>;
export interface InputErrorProps extends DefaultProps<InputErrorStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Error content */
    children?: React.ReactNode;
    /** Predefined size */
    size?: NsUISize;
    __staticSelector?: string;
}
export declare const InputError: React.ForwardRefExoticComponent<InputErrorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=InputError.d.ts.map