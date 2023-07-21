import React from 'react';
import { DefaultProps, NsUISize, Selectors } from '@ns-ui/styles';
import useStyles from './InputLabel.styles';
export type InputLabelStylesNames = Selectors<typeof useStyles>;
export interface InputLabelProps extends DefaultProps<InputLabelStylesNames>, React.ComponentPropsWithoutRef<'label'> {
    variant?: string;
    /** Label content */
    children?: React.ReactNode;
    /** Label root element */
    labelElement?: 'label' | 'div';
    /** Determines whether required asterisk should be displayed */
    required?: boolean;
    /** Predefined label size */
    size?: NsUISize;
    __staticSelector?: string;
}
export declare const InputLabel: React.ForwardRefExoticComponent<InputLabelProps & React.RefAttributes<HTMLLabelElement>>;
//# sourceMappingURL=InputLabel.d.ts.map