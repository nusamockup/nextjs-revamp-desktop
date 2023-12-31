import React from 'react';
import { DefaultProps, NsUISize } from '@ns-ui/styles';
import { InputSharedProps, InputStylesNames, InputWrapperBaseProps, InputWrapperStylesNames } from '../Input';
export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;
export interface TextInputProps extends DefaultProps<TextInputStylesNames>, InputSharedProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
    /** Input element type */
    type?: React.HTMLInputTypeAttribute;
    /** Props passed to root element (InputWrapper component) */
    wrapperProps?: Record<string, any>;
    /** Input size */
    size?: NsUISize;
    __staticSelector?: string;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInput.d.ts.map