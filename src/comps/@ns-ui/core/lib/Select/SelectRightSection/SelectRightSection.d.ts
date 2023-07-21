import React from 'react';
import { NsUISize } from '@ns-ui/styles';
export interface SelectRightSectionProps {
    shouldClear: boolean;
    clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    onClear?: () => void;
    size: NsUISize;
    error?: any;
    disabled?: boolean;
}
export declare function SelectRightSection({ shouldClear, clearButtonProps, onClear, size, error, }: SelectRightSectionProps): JSX.Element;
export declare namespace SelectRightSection {
    var displayName: string;
}
//# sourceMappingURL=SelectRightSection.d.ts.map