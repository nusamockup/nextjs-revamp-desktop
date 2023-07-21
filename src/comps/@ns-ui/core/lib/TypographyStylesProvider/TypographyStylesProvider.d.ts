import React from 'react';
import { DefaultProps } from '@ns-ui/styles';
export interface TypographyStylesProviderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Render any content to add NsUI typography styles */
    children: React.ReactNode;
}
export declare const TypographyStylesProvider: React.ForwardRefExoticComponent<TypographyStylesProviderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=TypographyStylesProvider.d.ts.map