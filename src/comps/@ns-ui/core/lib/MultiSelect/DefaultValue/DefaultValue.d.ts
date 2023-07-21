import React from 'react';
import { DefaultProps, NsUISize, NsUINumberSize, Selectors } from '@ns-ui/styles';
import useStyles from './DefaultValue.styles';
export type DefaultValueStylesNames = Selectors<typeof useStyles>;
export interface MultiSelectValueProps extends DefaultProps<DefaultValueStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    label: string;
    onRemove(): void;
    disabled: boolean;
    readOnly: boolean;
    size: NsUISize;
    radius: NsUINumberSize;
    variant: string;
}
export declare function DefaultValue({ label, classNames, styles, className, onRemove, disabled, readOnly, size, radius, variant, unstyled, ...others }: MultiSelectValueProps): JSX.Element;
export declare namespace DefaultValue {
    var displayName: string;
}
//# sourceMappingURL=DefaultValue.d.ts.map